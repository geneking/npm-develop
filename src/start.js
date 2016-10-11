const express = require('express');
const app     = express();

exports.run = function(options) {
    const port = options.port || 3000;
    app.listen(port);
    console.log('服务已启动，正在监听' + port + '端口...');
};
