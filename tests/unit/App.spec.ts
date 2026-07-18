import { mount } from '@vue/test-utils'

import App from '@/App.vue'
import ContactSection from '@/components/ContactSection.vue'
import HeroSection from '@/components/HeroSection.vue'

describe('App', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.removeAttribute('data-theme')
  })

  it('alterna o tema e salva a preferência', async () => {
    const wrapper = mount(App)
    expect(document.documentElement.dataset.theme).toBe('light')

    await wrapper.get('[data-testid="theme-toggle"]').trigger('click')

    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(localStorage.getItem('jc-theme')).toBe('dark')
  })

  it('renderiza os contatos permitidos', () => {
    const wrapper = mount(ContactSection)
    const hrefs = wrapper.findAll('a').map((link) => link.attributes('href'))

    expect(hrefs).toContain('mailto:jonescabral.tech@gmail.com')
    expect(hrefs).toContain('https://github.com/jctech9')
    expect(hrefs).toContain('https://www.linkedin.com/in/jones-cabral-00954030a')
  })

  it('não expõe número de contato nem cria links vazios', () => {
    const wrapper = mount(App)
    const renderedText = wrapper.text()
    const phonePattern = /(?:\+?55\s*)?(?:\(?\d{2}\)?\s*)?9\d{4}[-\s]?\d{4}/

    expect(renderedText).not.toMatch(phonePattern)
    wrapper.findAll('a').forEach((link) => {
      expect(link.attributes('href')?.trim()).toBeTruthy()
    })
  })

  it('exibe o currículo somente quando o arquivo público é informado', () => {
    const withoutResume = mount(HeroSection, { props: { hasResume: false } })
    expect(withoutResume.text()).not.toContain('Baixar currículo')

    const withResume = mount(HeroSection, { props: { hasResume: true } })
    const resumeLink = withResume.get('a[download]')
    expect(resumeLink.attributes('href')).toBe('/curriculo-jones-cabral.pdf')
  })
})
