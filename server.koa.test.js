/*
 * @Desc: 简单实用下koa
 * @Author: John.Guan
 * @Date: 2019-07-30 15:29:37
 * @Last Modified by: John.Guan
 * @Last Modified time: 2019-07-30 17:29:34
 */

const Koa = require('koa')
const Router = require('koa-router')

const server = new Koa()
const router = new Router()

router.get('/test/:id', context => {
  // context.body = `<p>我是一个text页面,我的id是${context.params.id}</p>`
  context.body = {
    code: 0,
    msg: '成功了',
    data: {
      name: 111
    }
  }
  // 下面这句，不设置，也会起作用
  context.set('Content-Type', 'application/json')
})

server.use(router.routes())

// server.use(async (context, next) => {
//   // path是请求的路径
//   const { path } = context
//   const str = JSON.stringify(context, null, 2)
//   console.log(str)
//   context.body = `<div>
//     <div>请求路径：${path}</div>
//     <div>请求context:${str}</div>
//   </div>`
//   await next()
// })

// server.use(async (context, next) => {
//   context.body = '<span>koa服务端渲染2222</span>'
// })

server.listen(8888, () => {
  console.log('koa启动了')
})
server.on('error', err => {
  log.err('报错了', err.toString())
})
