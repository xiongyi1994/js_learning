/** 
 * 
 * 一个Promise必然处于以下几种状态之一
 * 1、待定
 * 2、已兑现 
 * 3、已拒绝
 * 
 */

function a(resolve) {
    setTimeout(function () {
        console.log(1)
        resolve();
    }, 1000)
}

function b() {
    console.log(2)
}

new Promise((resolve, reject) => {
    a(resolve);
}).then(() => {
    b()
});

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(1);
        resolve();
    }, 1000);
}).then(() => {
    console.log(2)
});