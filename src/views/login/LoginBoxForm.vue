<template>
    <div class="border rounded p-4 bg-base elevation-4 text-left" @keyup.enter="onSubmit">
        <v-input v-model.trim="form.username" size="lg" class="mt-3" name="username" prefix="user" block autofocus placeholder="UM账号"></v-input>
        <v-input v-model.trim="form.password" size="lg" class="mt-3" type="password" name="password" block prefix="key" placeholder="密码"></v-input>
        <v-button block type="primary" size="lg" class="mt-3" @click="onLogin" :loading="loading">登录</v-button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class LoginBoxForm extends Vue {
  form = {
    username: '',
    password: ''
  }
  loading: boolean = false

  onLogin () {
    this.$auth.login(this.form)
  }

  valid (): boolean {
    if (!this.form.username.trim()) {
      this.$vua.$message.error('请输入用户名')
      return false
    }
    if (!this.form.password.trim()) {
      this.$vua.$message.error('请输入密码')
      return false
    }
    return true
  }
}
</script>

<style lang="scss">
</style>
