import { shallowMount } from '@vue/test-utils'
import Menu from '@/components/Menu.vue'

describe('Menu.vue', () => {
  it('renders the site title', () => {
    const wrapper = shallowMount(Menu)
    expect(wrapper.text()).toContain('Dividends FIRE')
  })
})
