/**
 *
 * Javascript 只有一种结构：对象。
 * 每个实例对象都有一个私有属性(__proto__)，指向它的构造函数的原型对象(prototype),
 * 该原型对象也有一个自己的原型对象，层层向上直到一个对象的原型对象为null
 *
 */

function f() {
    this.a = 1;
    this.b = 2;
}

let o = new f();

f.prototype.b = 3;
f.prototype.c = 4;

console.log(o.a); // 1
console.log(o.b); // 2 属性遮蔽 property shadowing
console.log(o.c); // 4

/**
 * 在javascript中，函数是允许拥有属性的
 */

function foo() {

}

console.log(foo.prototype)

/**
 *
 * Object.create()
 *
 */