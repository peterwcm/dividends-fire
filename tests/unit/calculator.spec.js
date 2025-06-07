import { shallowMount } from '@vue/test-utils';
import Calculator from '@/components/Calculator.vue';

describe('Calculator.vue', () => {
  it('renders FIRE Calculator title', () => {
    const msg = 'FIRE Calculator'
    const wrapper = shallowMount(Calculator)
    expect(wrapper.text()).toContain(msg)
  })

  it('calculates a dividends summary for the default data', () => {
    const wrapper = shallowMount(Calculator)
    wrapper.vm.calculate()
    const summary = wrapper.vm.dividendsSummary
    expect(summary).toHaveLength(wrapper.vm.numYears)
    const first = summary[0]
    expect(first.year).toBe(1)
    expect(first.annualDividends).toBeCloseTo(3360)
    expect(first.dividendYield).toBeCloseTo(0.04)
    expect(first.monthlyExpense).toBeCloseTo(20000 / 12)
    expect(first.monthlyDividends).toBeCloseTo(3360 / 12)
  })
})
