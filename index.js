
/**
* 设置cookie
* @function setCookie
* @param {key:cookie名称，value:cookie值，days:过期时间}
**/
const setCookie = function(key, value, days){
   var expire = new Date(),
       expireTime = expire.getTime() + days*24*60*60*1000;
   document.cookie = key + "=" + escape(value) + ";expires=" + new Date(expireTime);
};

/**
* 获取cookie
* @function getCookie
* @param {key:cookie名称}
**/
const getCookie = function(key){
    var reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)"),
        arr = document.cookie.match(reg);
    if(arr !== null) return unescape(arr[2]);
    return false;
};

/**
* 删除cookie
* @function delCookie
* @param {key:cookie名称}
**/
const delCookie = function(key){
    setCookie(key,"",-1);
};

/**
* Hello World
* @function hello
**/
const hello = function(key){
    console.log('Hello World!');
};

exports.getCookie = getCookie;
exports.setCookie = setCookie;
exports.delCookie = delCookie;
exports.hello     = hello;
