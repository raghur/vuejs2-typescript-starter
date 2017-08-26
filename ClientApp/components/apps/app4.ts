import  Vue  from 'vue';
import {Component} from 'vue-property-decorator';

@Component({
    components: {
        "todo-item":  () =>Promise.resolve(require.ensure(["./todo-item.vue.html"], 
                                                            ()=> require("./todo-item.vue.html"), 
                                                            "comps"))    
        }
})
export default class App4 extends Vue{
    todos= [
        {
            id: 0,
            text: "item 4"
        },
        {
            id: 1,
            text: "item 5"
        },
        {
            id: 2,
            text: "item 6"
        }
    ]

    active= null
}