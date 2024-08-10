import { shallowMount } from '@vue/test-utils';
import Calculator from '@/components/Calculator.vue';

describe('Calculator.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'FIRE Calculator'
    const wrapper = shallowMount(Calculator)
    expect(wrapper.text()).toContain(msg)
  })
})
