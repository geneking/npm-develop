## 一、注册npm账号
* 怎么将代码提到github，大家都知道需要一个github账号
* 同样，开发一个npm包，当然也需要一个npm账号，将npm包发布到npm的托管服务器
* 注册地址：[http://npmjs.org](http://npmjs.org)
* 该实例包含了模块的局部调用和全局调用两种方式

## 二、开发npm包

###1.目录构建
* npm init
* 项目结构：
```javascript
.
├── bin           //命令配置
├── README.md     //说明文档
├── index.js      //主入口
├── src           //功能文件
├── package.json  //包信息
└── test          //测试用例
```
<!--more-->
##2.开发模块
* 入口index.js模块
非全局安装(npm install xxx)，则多有的函数接口都通过index.js暴露给外部调用
```javascript
/**
* Hello World
* @function hello
**/
const hello = function(key){
    console.log('Hello World!');
};

exports.hello     = hello;
```
* init.js模块
```javascript
const exec = require('child_process').exec;

exports.run = function(name) {
    //初始化一个空文件夹
    exec('mkdir ' + name,function() {
        console.log('king init命令已执行...');
    });
};

```

* start.js模块
```javascript
const express = require('express');
const app     = express();

exports.run = function(options) {
    const port = options.port || 3000;
    app.listen(port);
    console.log('服务已启动，正在监听' + port + '端口...');
};

```

###3.配置全局命令
bin目录下写配置代码
* cli.js自定义命令，主要通过引入commander模块去处理，包括命令描述、参数及执行动作
* king.js文件名称应与全局命令king保持一致，做命令的入口，具体看demo

## 三、发布npm包
###1.npm login
```bash
npm login
```
###2.npm publish
```bash
npm publish
```
## 四、全局安装和局部安装
###1.局部安装
* 所有的函数功能接口都由index.js暴露给外部
* src里面可以放功能代码，src --> index.js只做output，暴露给外部调用
###2.全局安装
* 包全局安装的情况，一般是做自动化工具，关键在于配置全局命令，与index.js无关
* 通过bin目录下与全局命令相同的js文件(如king.js)处理command的输入【如：king start】

## 五、常见问题
###1. npm publish出错
```javascript
npm ERR! publish Failed PUT 403
npm ERR! Darwin 16.0.0
npm ERR! argv "/usr/local/Cellar/node/5.6.0/bin/node" "/usr/local/bin/npm" "publish"
npm ERR! node v5.6.0
npm ERR! npm  v3.10.3
npm ERR! code E403

npm ERR! "You cannot publish over the previously published version 0.0.43." : npm-develop
npm ERR!
npm ERR! If you need help, you may report this error at:
npm ERR!     <https://github.com/npm/npm/issues>

npm ERR! Please include the following file with any support request:
npm ERR!     /Volumes/work/private/github/npm-develop/npm-debug.log
```
没有更新package.json的版本号，每次的版本号必须大于上次，否则无法publish

###2. 采用sudo npm publish
password应该输入的是本机开机密码，非npm账号密码

###3. 全局命令无效
package.json中的bin命令配置，属性值应该和脚本名称一致
```javascript
"bin": {
  "king": "./bin/king.js"
}
```
## 六、使用本例
* download后修改项目名称根据第'三'步可发布，全局安装后可在本机测试，或局部安装后可调用hello函数测试
