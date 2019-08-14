/* 
 * @Desc: 这个东西exports出去的东西，就是我们修改的默认配置
 * @Author: John.Guan 
 * @Date: 2019-08-14 10:11:00 
 * @Last Modified by: John.Guan 
 * @Last Modified time: 2019-08-14 10:11:00 
 */
const withCss = require('@zeit/next-css')

if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {}
}

module.exports = withCss({})
