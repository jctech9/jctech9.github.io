import { mount } from '@vue/test-utils'

import AppHeader from '@/components/AppHeader.vue'
import { navigationLinks } from '@/data/navigation'

describe('AppHeader', () => {
  it('renderiza a marca e a navegação por âncoras', () => {
    const wrapper = mount(AppHeader, {
      props: {
        links: navigationLinks,
        activeSection: 'inicio',
        theme: 'dark',
      },
    })

    expect(wrapper.get('[data-testid="app-header"]').text()).toContain('Jones Cabral')
    const desktopLinks = wrapper.findAll('.desktop-navigation__link')
    expect(desktopLinks).toHaveLength(navigationLinks.length)
    expect(desktopLinks[0]?.attributes('href')).toBe('#inicio')
    expect(desktopLinks[0]?.attributes('aria-current')).toBe('page')
  })

  it('abre o menu móvel e fecha com Escape', async () => {
    const wrapper = mount(AppHeader, {
      attachTo: document.body,
      props: {
        links: navigationLinks,
        activeSection: 'inicio',
        theme: 'dark',
      },
    })

    const button = wrapper.get('[data-testid="menu-button"]')
    await button.trigger('click')
    expect(button.attributes('aria-expanded')).toBe('true')
    expect(wrapper.get('#mobile-navigation').isVisible()).toBe(true)

    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    await wrapper.vm.$nextTick()
    expect(button.attributes('aria-expanded')).toBe('false')

    wrapper.unmount()
  })
})
