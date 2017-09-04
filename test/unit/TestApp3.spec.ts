import Vue from 'vue'
import Vuex from 'vuex'
import {expect} from 'chai'
import {mount} from 'avoriaz'
import sinon from 'sinon'
import app3 from '../../ClientApp/components/apps/app3.vue'

Vue.use(Vuex)

describe('app3.vue', () => {
    let getters;
    let store;
    beforeEach(() => {
        getters = {
            hasActive: sinon.stub(),
            todos: sinon.stub().returns( [{
                    text:"an item"
                }])
        }
        store = new Vuex.Store({
            state: {},
            getters
        });
    })

    it("should render header text if prop is set", ()=> {
        const wrapper = mount(app3, {store})
        wrapper.setProps({
            headerText: "a header",
            simple: true
        });
        expect(wrapper.text()).to.contain('a header')
    });

    it("should render todos", (done)=> {
        const wrapper = mount(app3, {store})
        wrapper.setProps({
            simple: true
        });
        expect(wrapper.text()).not.to.contain('a header')
        Vue.nextTick(() => {
            expect(wrapper.find("li").length).to.equal(1)
            expect(wrapper.find("li")[0].text()).to.contain("an item")
            done()
        })
    });
});