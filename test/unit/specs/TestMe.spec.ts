import Vue from 'vue'
import app2 from '../../../ClientApp/components/apps/app2.vue'
import { expect } from 'chai'
import { mount } from 'avoriaz'

describe('app2.vue', () => {
    it('should render props', () => {
        let comp = mount(app2, {
            propsData: {
                greeting: 'a greeting'
            }
        })

        expect(comp.element.textContent).to.contain('a greeting')
    })
})
