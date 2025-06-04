import { shallowMount } from '@vue/test-utils';
import Calculator from '@/components/Calculator.vue';

describe('Calculator.vue', () => {
  it('renders FIRE Calculator title', () => {
    const msg = 'FIRE Calculator'
    const wrapper = shallowMount(Calculator)
    expect(wrapper.text()).toContain(msg)
  })
})
