<template>
<div>
<h4>Login</h4>
<form v-if="!isLoggedIn">
    <span style="color:red" v-if="loginerror"> {{loginerror}}</span><br/>
    <input v-model="username"/><br/>
    <input v-model="password"/><br/>
    <button @click.prevent="login" :disabled="!username || hasbeenclicked">Login</button>
</form>
<div v-if="isLoggedIn">
    <p> logged in as {{ loggedInUser}}</p>
    <button @click="logout" >Logout</button>
</div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
@Component
export default class Login extends Vue {
    username:string = '';
    password:string = '';
    loginerror:string = ''

    // to prevent multiple clicks
    hasbeenclicked = false

    login () {
        this.hasbeenclicked = true
        this.loginerror = ''
        console.log('login clicked', this.username, this.password)
        console.log(this.$route)
        this.$store.dispatch('login', {
            username: this.username,
            password: this.password
        })
            .then(() => this.$router.replace({path: this.$route.query.from || '/'}))
            .catch(reason => {
                this.loginerror = reason
                this.hasbeenclicked = false
            })
    }
    logout () {
        this.$store.dispatch('logout')
            .then(() => {
                console.log(this.$route.fullPath)
                this.$router.replace({
                    path: this.$route.fullPath,
                    query: {
                        t: Math.random().toString()
                    }
                })
            })
    }
    get isLoggedIn () {
        return this.$store.getters.isLoggedIn
    }
    get loggedInUser () {
        return this.$store.getters.loggedInUser
    }
}
</script>