import { expect, test } from '@playwright/test'

test('carrega a página sem erros de console e mostra o conteúdo principal', async ({ page }) => {
  const consoleErrors: string[] = []
  const pageErrors: string[] = []
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text())
  })
  page.on('pageerror', (error) => pageErrors.push(error.message))

  await page.goto('/')

  await expect(page).toHaveTitle(/Jones Cabral/)
  await expect(
    page.getByRole('heading', { level: 1, name: /Desenvolvedor Full Stack/ }),
  ).toBeVisible()
  await expect(page.getByTestId('project-card')).toHaveCount(7)
  expect(consoleErrors).toEqual([])
  expect(pageErrors).toEqual([])
})

test('navega por âncoras e os links principais são válidos', async ({ page }) => {
  await page.goto('/')

  await page
    .getByRole('navigation', { name: 'Navegação principal', exact: true })
    .getByRole('link', { name: 'Projetos' })
    .click()
  await expect(page).toHaveURL(/#projetos$/)
  await expect(
    page.getByRole('heading', { name: 'Código aplicado a problemas concretos.' }),
  ).toBeVisible()

  const repositoryLinks = page.getByRole('link', { name: /Ver código/ })
  await expect(repositoryLinks).toHaveCount(7)
  const demoLinks = page.getByRole('link', { name: /Ver projeto/ })
  await expect(demoLinks).toHaveCount(4)
})

test('alterna e persiste o tema, e filtra projetos', async ({ page }) => {
  await page.goto('/')
  const initialTheme = await page.locator('html').getAttribute('data-theme')

  await page.getByTestId('theme-toggle').click()
  const changedTheme = initialTheme === 'dark' ? 'light' : 'dark'
  await expect(page.locator('html')).toHaveAttribute('data-theme', changedTheme)

  await page.reload()
  await expect(page.locator('html')).toHaveAttribute('data-theme', changedTheme)

  await page.getByTestId('category-filter').selectOption('Infraestrutura')
  await expect(page.getByTestId('project-card')).toHaveCount(1)
  await expect(page.getByText('Infraestrutura e Serviços em Raspberry Pi')).toBeVisible()
})

test('permite acesso por teclado ao conteúdo e não tem overflow horizontal', async ({ page }) => {
  await page.goto('/')
  await page.keyboard.press('Tab')

  const skipLink = page.getByRole('link', { name: 'Pular para o conteúdo' })
  await expect(skipLink).toBeFocused()
  await skipLink.press('Enter')
  await expect(page).toHaveURL(/#conteudo$/)

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  )
  expect(hasHorizontalOverflow).toBe(false)
})

test.describe('layout móvel', () => {
  test.use({ viewport: { width: 390, height: 844 } })

  test('abre e fecha o menu, navega e mantém o layout contido', async ({ page }) => {
    await page.goto('/')

    const menuButton = page.getByTestId('menu-button')
    await expect(menuButton).toBeVisible()
    await menuButton.click()
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true')

    await page
      .getByRole('navigation', { name: 'Navegação principal móvel' })
      .getByRole('link', { name: 'Contato' })
      .click()
    await expect(page).toHaveURL(/#contato$/)
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false')

    await menuButton.click()
    await page.keyboard.press('Escape')
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    await expect(menuButton).toBeFocused()

    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    )
    expect(hasHorizontalOverflow).toBe(false)
  })
})
