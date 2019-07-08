<template>
  <div :class="[$style.login]">
    <div :class="[$style.box]">
      <div :class="[$style.logo]"><img src="~@/assets/logo.png"></div>
      <div :class="[$style.title]">XXXXXXX</div>
      <login-box-form></login-box-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LoginBoxForm from './LoginBoxForm.vue'

  @Component({
    components: { LoginBoxForm }
  })
export default class Login extends Vue {
}
</script>

<style lang="scss" module>
  $logo-size: 48px;
  .login{
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    background: #f9f9f9;
  }

  .box {
    width: 24rem;
    margin: auto;
    padding: 5rem 1rem 0 1rem;
    text-align: center;
    /*margin: 2rem auto auto;*/
  }

  .logo {
    width: $logo-size;
    text-align: center;
    margin: auto;
    &>img{
      height: $logo-size;
      width: $logo-size;
    }
  }
  .title {
    text-align: center;
    margin-bottom: 2rem;
    margin-top: 1rem;
    font-size: 24px;
    // font-weight: $font-weight-medium;
  }
</style>
