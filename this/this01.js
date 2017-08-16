// this 是js中一个非常重要的关键字，被自动定义在所有函数的作用域中

// this 到底指向的哪一个对象？？？

function Foo() {
	this.count = 1;
	console.log(this.count)
	console.log(this)
}

Foo()

// this是无法和词法作用域的查找混合使用的

// this是在运行时进行绑定的，this的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式

// this既不指向函数自身，也不指向函数的词法作用域