/*
 * @Desc: 简单实用ioredis
 * @Author: John.Guan
 * @Date: 2019-08-13 14:12:56
 * @Last Modified by: John.Guan
 * @Last Modified time: 2019-08-13 14:23:15
 */
async function test(params) {
  const Redis = require('ioredis')
  const redis = new Redis({
    // 这些东西，不传的话，都是默认
    port: 6379
    // host: '127.0.0.1',
    // family: 4,
    // password: 'auth', // 如果配置了redis的密码，那么需要传
    // db: 0
  })

  await redis.set('c', '123')
  // 获取所有的keys， 是个异步操作
  const keys = await redis.keys('*')
  console.log(keys)
  console.log(await redis.get('b'))
  // 10秒之后，过期
  await redis.setex('d', 10, 123)
}
test()
