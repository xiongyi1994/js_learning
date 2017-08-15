// 面向类的设计模式：实例化、继承、多态

// 类是一种设计模式，js中是没有类的，但是可以使用一些方法来实现近似类的功能。

// js中只有对象！

// 实现类的三种方式 

// 1、构造函数法 this prototype new

function Cat() {
	this.name = "阿黄"
}

var cat = new Cat()
console.log(cat.name)

Cat.prototype.makeSound = function() {
	console.log("喵喵")
}
cat.makeSound()

// 2、Object.create()法
var Cat = {
	name: "阿黄",
	makeSound: function() {
		console.log("喵喵")
	}
}

var cat = Object.create(Cat)
console.log(cat.name)
cat.makeSound()

// 3、极简主义法

var Cat = {
	createNew: function() {
		var cat = {}
		cat.name = "阿黄"
		cat.makeSound = function() {
			console.log("喵喵")
		}
		return cat
	}
}

var cat = Cat.createNew()
console.log(cat.name)
cat.makeSound()

// 继承

var Animal = {
	createNew: function() {
		var animal = {}
		animal.sleep = function() {
			console.log("睡觉觉")
		}
		return animal
	}
}

var Cat = {
	createNew: function() {
		var cat = Animal.createNew()
		var sound = "喵喵"
		cat.name = "阿黄"
		cat.makeSound = function() {
			console.log(sound)
		}
		return cat
	}
}

cat = Cat.createNew()
cat.sleep()
console.log(cat.sound)
cat.makeSound()

// 数据共享
　　
var Cat = {　　　　
	sound: "喵喵喵",
	createNew: function() {　　　　　　
		var cat = {};　　　　　　
		cat.makeSound = function() {
			console.log(Cat.sound);
		};　　　　　　
		cat.changeSound = function(x) {
			Cat.sound = x;
		};　　　　　　
		return cat;　　　　
	}　　
}

　
var cat1 = Cat.createNew();　　
var cat2 = Cat.createNew();　　
cat1.makeSound(); // 喵喵喵

cat2.changeSound("啦啦啦");　　
cat1.makeSound(); // 啦啦啦