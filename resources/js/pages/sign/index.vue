<template>
  <main>
    <ul class="nav nav-pills nav-fill" role="tablist">
      <li class="nav-item">
          <a class="nav-link active" role="tab" data-toggle="tab" id="tab-sign-in" href="#sign-in">Sign In</a>
      </li>  
      <li class="nav-item">
          <a class="nav-link" role="tab" data-toggle="tab" id="tab-sign-up" href="#sign-up">Sign Up</a>
      </li>  

    </ul>

    <section class="tab-content" >
      <div class="tab-pane fade show active" id="sign-in">
        <sign-in-page/>
      </div>
      <div class="tab-pane fade" id="sign-up">
        <sign-up-page/>
      </div>
    </section>
  </main>
</template>

<script>

import SignInPage from './components/sign-in-page';
import SignUpPage from './components/sign-up-page';

export default {
  components:{
    SignInPage,
    SignUpPage
  }
}
</script>

<style lang="scss" scoped>
@import '../../../sass/_variables.scss';

  .nav-pills{
    .nav-link{
       color: $color-primary;

      &.active{
        color: $color-primary;
        background: $color-accent-primary;
      }
    }
  }

  .tab-content{
    padding-top:2rem;
  }
</style>