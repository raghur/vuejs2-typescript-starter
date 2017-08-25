import  Vue  from 'vue';
import {Component} from 'vue-property-decorator';
import todoItem from './todo-item.vue.html';

@Component({
    components: {
        "todo-item":  () =>new Promise((resolve, reject) => require.ensure(["./todo-item.vue.html"], 
                                                                            ()=> resolve(require("./todo-item.vue.html")), 
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