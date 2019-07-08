<template>
  <div style="padding-top: 4rem;">
    <div class="w-24 m-auto text-center">
      <div :class="[statusCls]" class="ft-64"><v-icon :type="iconType"></v-icon></div>
      <div class="display-3 mt-3">{{code}}</div>
      <div class="mt-2">{{text}}</div>
      <div class="mt-3">
        <v-button class="w-8" @click="goBack">返回上一级</v-button>
        <v-button type="primary" class="m-3 w-8" @click="goHome">返回首页</v-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Error extends Vue {
  get code (): string {
    return this.$route.params['code']
  }

  get iconType () {
    if (this.code === '403') return 'exclamation-circle'
    return 'close-circle'
  }

  get statusCls (): string {
    if (this.code === '403') return 'text-warning'
    return 'text-error'
  }

  get text () {
    if (this.code === '404') return '未找到该页面， 请核对地址是否有误'
    else if (this.code === '403') return '暂时没有权限访问该页面， 请联系管理员申请权限'
    return '未知错误代码'
  }

  goBack () {
    this.$router.go(-1)
  }

  goHome () {
    this.$router.replace('/')
  }
}
</script>
