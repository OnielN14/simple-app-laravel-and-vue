<template>
  <main>
    <div class="company-slogan">
      <img class="logo-page" src="/img/logo.png" alt="logo">
      <h3>Pet Lover's Friend</h3>
    </div>
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../../sass/_variables.scss';

  main{
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: $color-accent-primary;
  }

  .company-slogan{
    text-align: center;

    .logo-page{
      width: 35vw;
    }
  }

</style>