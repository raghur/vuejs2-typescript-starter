<template>
    <div>
    <slot-main></slot-main>
    <slot-comp title="a different title">
        <app2 slot="content"/>
        <app4 slot="footer"/>
    </slot-comp>
    </div>
</template>

<script>
import SlotComp from "./slot-comp.vue"
import App2 from "./app2.vue"
import App4 from "./app4.vue"
import SlotMain from "./slot-main.vue"
export default {
    components: {
        'slot-main': SlotMain,
        'slot-comp': SlotComp,
        'app2': App2,
        'app4': App4
    }
}
</script>