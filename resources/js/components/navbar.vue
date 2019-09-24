<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand --flex-item" :to="{name:'home'}"><img src="/img/logo-flat.png" alt="logo"></router-link>
      <ul class="navbar-nav justify-content-end --flex-item">
          <li class="nav-item">
              <router-link :to="{name:'home'}" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
              <router-link :to="{name:'about-us'}" class="nav-link">About Us</router-link>
          </li>
          <li class="nav-item">
              <!-- <router-link :to="{name:'sign'}" class="nav-link">Sign In</router-link> -->
              <a href="" class="nav-link" data-toggle="modal" data-target="#modal-sign">Sign In</a>
          </li>
      </ul>

      <sign-in-modal/>
  </nav>
</template>

<script>
import SignInModal from '../pages/sign/index-modal';

export default {
    components:{
        SignInModal
    }
}
</script>

<style lang="scss" scoped>
@import '../../sass/_variables.scss';

.--flex-item{
    flex:1
}

.navbar{
    .navbar-brand{
        & > img{
            height: 4rem;
        }
    }

    .navbar-nav{
        .nav-item{
            font-size: 1.1rem;
            
            & > .nav-link{
                color:$color-primary;
            }
        }
    }
}
</style>