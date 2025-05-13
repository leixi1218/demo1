// 导入net模块
const net = require('net');

// 导入fs模块
const fs = require('fs');

// 创建服务器实例对象
const server = net.createServer((socket) => {
    // 读取客户端发来的数据
    socket.on('data',(data)=>{
        fs.writeFile('./uploads/目标文件.jpg',data,(err) => {
           if(err){
            return console.log(err.message);
           }
           socket.write('文件上传成功');
        });
    });

    // 处理异常情况
    socket.on('error',(err) => {
        console.log(err.message);
    });
});

server.listen(8888,() => {
    console.log('服务器已启动...');
});