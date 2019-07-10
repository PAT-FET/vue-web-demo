<template>
  <div class="home">
    <div class="text-right">
      <div class="m-2" v-if="$auth.principle">
        <div>
          <a @click="$router.push('/')">首页（Auth Only）</a>
          <a @click="$router.push('/dashboard')" class="ml-2">仪表盘（Admin Only）</a>
        </div>
        <div>
          <span class="mr-2">{{$auth.username}}</span>
          <a @click="onLogout">登出</a>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  onLogout () {
    this.$auth.logout()
  }
}
</script>
