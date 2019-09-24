<template>
  <main>
      <form action="">

          <div class="form-group">
              <label for="">Username</label>
              <input type="text" class="form-control" placeholder="Type your username">
          </div>
          <div class="form-group">
              <label for="">Password</label>
              <input type="password" class="form-control" placeholder="Type your password">
          </div>
          <div class="form-group">
              <button class="btn btn-primary --full-width">Sign In</button>
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