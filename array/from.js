// The Array.from() method creates a new Array instance from an array-like or iterable object.
// from()方法

// Array from a string
Array.from('foo');
// ["f", "o", "o"]

// Array from a Set
var s = new Set(['foo', this]);
Array.from(s);
// ["foo", {}}]

// Array from a Map
var m = new Map([
	[1, 2],
	[2, 4],
	[4, 8]
]);
Array.from(m);
// [[1, 2], [2, 4], [4, 8]]

// Array from an Array-like object (arguments)
function f() {
	return Array.from(arguments);
}
f(1, 2, 3);
// [1, 2, 3]