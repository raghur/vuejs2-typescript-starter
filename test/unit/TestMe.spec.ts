import Vue from 'vue'
import app2 from '../../ClientApp/components/apps/app2.vue'
import {expect} from 'chai'
describe('app2.vue', () => {
    it("should render props", ()=> {
        const ctor = Vue.extend(app2);
        const comp = new ctor({
            propsData: {
                greeting: "a greeting"
            }
        }).$mount();
        expect(comp.$el.textContent).to.contain('a greeting')
    });

});