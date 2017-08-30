<template>
    <div>
    <h3 v-if="headerText">Store</h3>
    <p> 
        {{ headerText}}
    </p>
    <ol>
        <li v-for="todo in todos">
            {{todo.text}} <span v-if="!simple"><button @click="setActive(todo)" v-bind:disabled="hasActive">Edit</button></span>
        </li>
    </ol>
    </div>

</template>
<script src="./app3.ts"/>