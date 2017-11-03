import Vue from 'vue'
export default interface LoginRequest {
    username: string
    password: string
}

const LoginMixin = {
    created (this: Vue) {
        console.log('LoginMixin.created() called')
        if (!this.$store.getters.isLoggedIn) {
            this.$router.replace({ path: '/login', query: { 'from': this.$route.fullPath } })
        }
   },
   beforeUpdate (this: Vue) {
        console.log('LoginMixin.beforeUpdate() called')
        if (!this.$store.getters.isLoggedIn) {
            this.$router.replace({ path: '/login', query: { 'from': this.$route.fullPath } })
        }
   },
   computed : {
       t (this: Vue): string {
           return this.$route.query.t
       }
   }
}
export { LoginMixin }
