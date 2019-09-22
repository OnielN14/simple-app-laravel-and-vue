<template>
  <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="">Test</a>
      <ul>
          <li>
              <router-link :to="{name:'home'}">Home</router-link>
              <router-link :to="{name:'about-us'}">About Us</router-link>
              <router-link :to="{name:'sign'}">Sign</router-link>
          </li>
      </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>