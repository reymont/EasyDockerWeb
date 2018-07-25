var spawn = require('child_process').spawn;

//创建一个子进程，将进程描述符赋值给child
var child = spawn('kubectl', ['get', 'po','-n','test02']);

//监听标准输出流
child.stdout.on('data', function (data) {
    process.stdout.write(data);
});

//终止进程
setTimeout(() => {
    //默认发送SIGTERM
    child.kill();
}, 60*1000);

//监听子进程退出事件
child.on('exit', (code, signal) => {
    if (code) {
        //正常退出会有一个退出码，0为正常退出，非0一般表示错误
        console.log('child process terminated with code ' + code);
    } else {
        //非正常退出，输出退出信号
        console.log('child process terminated with signal ' + signal);
    }
});