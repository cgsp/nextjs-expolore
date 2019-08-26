/*
 * @Desc:
 * @Author: John.Guan
 * @Date: 2019-07-24 22:23:35
 * @Last Modified by: John.Guan
 * @Last Modified time: 2019-08-26 14:54:33
 */

import { Button } from 'antd'
import { withRouter } from 'next/router'

const A = props => {
  console.log(props)
  return <div>我A页面</div>
}

export default withRouter(A)
