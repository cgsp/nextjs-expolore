import Router from 'next/router'

// export default () => <span onClick={() => Router.push('/a')}>去a页面</span>

export default () => {
  return (
    <span
      onClick={() =>
        Router.replace(
          {
            pathname: '/a',
            query: {
              name: 'gso'
            }
          },
          '/a/gso'
        )
      }
    >
      去a页面
    </span>
  )
}
