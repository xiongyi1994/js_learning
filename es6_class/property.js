class A {
	constructor() {
		this.index = 0
		var that = this
		setInterval(function() {
			that.print()
		}, 1000)
	}
	foo() {
		this.index += 1
		console.log(this.index)
	}
	print() {
		this.index += 1
		console.log(this.index)
	}
}

module.exports = {
	'A': A
}