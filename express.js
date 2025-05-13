// 导入express模块
const express = require('express');

// 创建Web服务器实例对象
const app = express();

// 创建请求地址为'/'的GET请求方式的路由
app.get('/',(req,res) => {
    res.send('<h1>你好，HelloWorld</h1>')
});

// 监听3000端口
app.listen(3000,() => {
// 监听8888端口
app.listen(8888,() => {
    console.log('服务器已启动...');
});
