<template>
  <div class="home">
    <div class="text-right">
      <div class="m-2" v-if="$auth.principle">
        <span class="mr-2">{{$auth.username}}</span>
        <a @click="onLogout">登出</a>
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
    this.$auth.logout().then(() => {
      this.$router.push('/login')
    })
  }
}
</script>
