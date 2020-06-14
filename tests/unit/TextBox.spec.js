import { shallowMount } from '@vue/test-utils'
import TextBox from '@/components/TextBox.vue'



describe('TextBox.vue', () => {
  it('Renders Not Required TextBox', () => {
    const data = { label: "test", required: false }
    const wrapper = shallowMount(TextBox, {
      propsData: { data: data }
    })

    expect(wrapper.find('label').text()).toBe(data.label)
    expect(wrapper.find('input').attributes('required')).toBeFalsy()
  })

  it('Renders Required TextBox', () => {
    const data = { label: "test", required: true }
    const wrapper = shallowMount(TextBox, {
      propsData: { data: data }
    })

    expect(wrapper.find('label').text()).toBe(data.label)
    expect(wrapper.find('input').attributes('required')).toBeTruthy()
  })
})
