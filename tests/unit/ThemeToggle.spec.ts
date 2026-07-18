import { mount } from '@vue/test-utils'

import ThemeToggle from '@/components/ThemeToggle.vue'

describe('ThemeToggle', () => {
  it('informa a ação e emite o evento de alternância', async () => {
    const wrapper = mount(ThemeToggle, { props: { theme: 'dark' } })

    expect(wrapper.get('button').attributes('aria-label')).toBe('Ativar tema claro')
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('toggle')).toHaveLength(1)
  })
})
