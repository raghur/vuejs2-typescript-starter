import Vue from 'vue'
import Vuex from 'vuex'
import { expect } from 'chai'
import { mount } from 'avoriaz'
import sinon from 'sinon'
import app3 from '../../../ClientApp/components/apps/app3.vue'
import realstore from '../../../ClientApp/store'
import app2 from '../../../ClientApp/components/apps/app2.vue'

Vue.use(Vuex)

describe('app3.vue', () => {
    let getters
    let store
    beforeEach(() => {
        getters = {
            hasActive: sinon.stub(),
            todos: sinon.stub().returns([{
                    text: 'an item'
                }])
        }
        store = new Vuex.Store({
            state: {},
            getters
        })
    })

    it('should render header text if prop is set', () => {
        const wrapper = mount(app3, { store })
        wrapper.setProps({
            headerText: 'a header',
            simple: true
        })
        expect(wrapper.text()).to.contain('a header')
    })

    it('should render todos', (done) => {
        // test against the real store for illustration.
        const wrapper = mount(app3, {
            store: realstore,
            propsData: {
                simple: true
            }
        })
        expect(wrapper.text()).not.to.contain('a header')
        Vue.nextTick(() => {
            expect(wrapper.find('li').length).to.equal(3)
            expect(wrapper.find('li')[0].text()).to.contain('item 1')
            done()
        })
    })
})
