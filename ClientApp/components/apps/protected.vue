<template>
  <div>
      <p>This is the protected page! If you're seeing this, then you logged in successfully</p>
      <p style="display:none"> // do not remove - exists to force a component update {{ t}}</p>
  <login/>
  </div>
</template>

<script lang="ts">
import {LoginMixin} from './loginrequest'
import Login from './login.vue'
export default {
  mixins: [new LoginMixin()],
  components: {
      Login
  }
}
</script>
