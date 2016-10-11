const exec = require('child_process').exec;

exports.run = function(name) {
    //初始化一个空文件夹
    exec('mkdir ' + name,function() {
        console.log('king init命令已执行...');
    });
};
