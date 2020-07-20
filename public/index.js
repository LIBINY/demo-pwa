async function testApi() {
    console.log('尝试请求数据')
    const res = await fetch('/api/test')
    console.log(res)
}
testApi()