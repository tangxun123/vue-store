module.exports = {
    //axios域代理，解决axios跨域问题
    baseUrl: '/',
    devServer: {
        proxy: {
            '': {
                target: 'https://www.ele.me/restapi/shopping',
                changeOrigin: true,
                ws: true,
                pathRewrite: {

                }
            }
        }
    }
}