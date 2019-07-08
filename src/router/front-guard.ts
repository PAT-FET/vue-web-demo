import { NavigationGuard } from 'vue-router/types/router'
import NP from 'nprogress'
import Vue from 'vue'

const whiteList = ['/login', '/error/**'] // ant style wildcat

export const frontGuard: NavigationGuard = function (to, from, next) {
  NP.start()
  if (onWhiteList(to.path)) {
    next()
    return
  }
  Vue.prototype.$auth.access(to.meta && to.meta.pid).then(() => {
    next()
  }).catch(() => {
    next({ path: '/error/403' })
    NP.done()
  })
}

function onWhiteList (path: string) {
  const convertRegEx = (expr: string) => {
    return new RegExp('^' +
      (expr || '')
        .replace(/\*\*/g, '#__#')
        .replace(/\*/g, '[^/]*')
        .replace(/#__#/g, '.*') +
      '$')
  }
  return whiteList.some(v => convertRegEx(v).test(path))
}
