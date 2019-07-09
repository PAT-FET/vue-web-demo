import { Controller, RequestMapping } from '@pat-fet/mock-server'

export default class users extends Controller{

  @RequestMapping({url: '/login', method: 'post'})
  login (req, res, context) {
    let username = req.body.username
    let user = this.collection.find({username})[0]
    if (!user) throw new Error('未找到用户: ' + username)
    let token = context.authService.setAuth(req, user)
    return { token }
  }

  @RequestMapping({url: '/logout', method: 'delete'})
  logout (req, res, context) {
    context.authService.clear(req)
  }

  @RequestMapping({ url: '/principle', method: 'get' })
  getPrinciple(req, res, context) {
    return context.authService.getAuth(req)
  }  
}
