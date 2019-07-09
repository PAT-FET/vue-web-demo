// 支持 module.exports
export default [
  {
    username: 'user',
    roles: [
      {
        code: 'USER'
      }
    ],
    authorities: [
      {
        pid: 'tmr'
      }
    ]
  },
  {
    username: 'admin',
    roles: [
      {
        code: 'ADMIN'
      }
    ],
    authorities: [
      {
        pid: 'tmr'
      },
      {
        pid: 'tmr.dashboard'
      }
    ]
  }
]
