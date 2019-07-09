const MockServer = require('@pat-fet/mock-server')

// 导入初始化数据
MockServer.Controller.inits = MockServer.requireAll({ dirname: __dirname + '/inits' })

// 导入控制器
MockServer.requireAll({ dirname: __dirname + '/controllers' })

// 配置
const config = {
  port: 3000,
  // auth: {
  //   enabled: false
  //   // token: {
  //   //   enabled: false
  //   // }
  // }
}

const server = new MockServer(config)

server.run()
