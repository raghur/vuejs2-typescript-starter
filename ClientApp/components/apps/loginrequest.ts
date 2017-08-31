import Vue from 'vue';
export default interface LoginRequest {
    username:string
    password:string
}

class LoginMixin extends Vue{
    created() {
        console.log("LoginMixin.created() called")
        if (!this.$store.getters.isLoggedIn) {
            this.$router.replace ({path:"/login", query: {"from": this.$route.fullPath}})
        }
   }
   beforeUpdate() {
        console.log("LoginMixin.beforeUpdate() called")
        if (!this.$store.getters.isLoggedIn) {
            this.$router.replace ({path:"/login", query: {"from": this.$route.fullPath}})
        }
   }
   computed = {
       t(this:Vue):string{
           return this.$route.query.t
       }
   }
};
export {LoginMixin};