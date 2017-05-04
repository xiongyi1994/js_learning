/*
 * argv是process的一个属性
 * 返回一个数组，由命令行执行脚本时的各个参数组成。
 * 它的第一个成员总是node，第二个成员是脚本文件名，其余成员是脚本文件的参数。
 */

console.log(process.argv)