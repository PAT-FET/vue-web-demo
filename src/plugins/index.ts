import Vue from 'vue'
import vua from 'vua'
import 'vua/dist/vua.css'
import { Auth, Http } from '@pat-fet/web-vue-utils'
import zhHans from 'vua/src/locale/zh-Hans'

export default function install (): void {
  Vue.use(vua, {
    lang: {
      locales: { 'zh-Hans': zhHans }
    }
  })

  Vue.use(Auth)
  Vue.use(Http, {
    // baseURL: 'https://www.easy-mock.com/mock/5d19fe9f35e5413fe189fec3/api'
  })
}
