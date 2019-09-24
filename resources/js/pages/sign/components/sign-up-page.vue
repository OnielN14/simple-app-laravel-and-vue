<template>
  <main>
      <form action="">

          <div class="form-group">
              <label for="">Username</label>
              <input type="text" class="form-control" placeholder="Type your demanded username">
          </div>
          <div class="form-group">
              <label for="">Email</label>
              <input type="text" class="form-control" placeholder='Type your email address, e.g. "your.email@domain.com"'>
          </div>
          <div class="form-group">
              <label for="">Password</label>
              <input type="password" class="form-control" placeholder="Type your password">
          </div>
          <div class="form-group">
              <label for="">Confirm Password</label>
              <input type="password" class="form-control" placeholder="Re-type your password, please">
          </div>
          <div class="form-group">
              <button class="btn btn-primary --full-width">Sign Up</button>
          </div>
      </form>
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .--full-width{
        width: 100%;
    }
</style>