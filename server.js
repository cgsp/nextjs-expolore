const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')
const router = new Router()

// 区分环境
const isDev = process.env.NODE_ENV !== 'production'
// 创建app
const app = next({ dev: isDev })
// 处理http请求的
const handle = app.getRequestHandler()

// app.prepare是用来处理编辑，pages里面的文件的
// 等编译完成了之后，再做Koa服务
app.prepare().then(() => {
  const server = new Koa()

  router.get('/a/:name', async ctx => {
    const name = ctx.params.name
    await handle(ctx.req, ctx.res, {
      pathname: '/a',
      qurey: {
        name
      }
    })
    ctx.respond = false
  })
  server.use(router.routes())

  // 调用中间件
  server.use(async (context, next) => {
    await handle(context.req, context.res)
    context.respond = false
  })
  server.listen(3000, () => {
    console.log('启动koa成功')
  })
  server.on('error', err => {
    log.error('server error', err)
  })
})
