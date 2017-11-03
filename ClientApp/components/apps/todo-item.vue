
c<template >
<li> {{todo.text}}
        <button v-on:click="setActive" v-if="!isActive">Set Active</button>
        <span v-else>Selected</span>
    </li>
</template>
<script src="./todo-item.ts" />
<style scoped>
    li {
        padding: "5px";
    }
</style>
