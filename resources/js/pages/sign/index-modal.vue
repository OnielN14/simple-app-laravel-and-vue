<template>
  <div class="modal fade" role="dialog" id="modal-sign">
      <div class="modal-dialog" role="document">
          <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                  <sign-page/>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import SignPage from './index'

export default {
    components:{
        SignPage
    }
}
</script>

<style lang="scss" scoped>
@import '../../../sass/_variables.scss';

    .modal-content{
        background:$light-theme-main;

        .modal-header{
            border-bottom: none;
        }
    }
</style>