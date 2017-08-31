<template>
    <div>
    <slot-comp title="A Funky title as string">
        <app2 slot="content"/>
        <app3 slot="footer" :simple="true"/>
    </slot-comp>
</div>
</template>

<script>

export default  {
    components: {
        'slot-comp': () => import(/* webpackChunkName: "comps" */"./slot-comp.vue")
    }
} 
</script>