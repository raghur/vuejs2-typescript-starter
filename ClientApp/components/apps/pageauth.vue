<template>
  <div>
      <h3>Route interception with mixins</h3>
      <p>THis is an example of a page requiring authentication. we can intercept the route and check in the state store
          if the user is logged in or not. If not, we redirect them to the login page along with the current route.
          The login page takes care of login and if successful, redirects the user to their desired page.
      </p>
      <p>For successful login, type in any username/password</p>
      <p>For a failed login, use username = "bad"</p>
      <p><span style="font-weight:bold">NOTE: DO not actually use this approach for protecting pages.A much better way is to markup routes 
          with meta attribute like 'RequiresAuth' and then use the route update hooks to 
          check whether the user is authenticated.
          </span>
      </p>
  <router-link :to="{path: '/protected'}">Click this link to navigate to a protected page </router-link>
  </div>
</template>


