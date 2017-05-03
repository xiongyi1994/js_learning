function justNum(argument) {
	if (typeof argument != "number" || argument > 20 || argument < 3) {
		argument = 10
	}
	return argument
}

function main() {
	argument = 2
	argument = justNum(argument)
		//console.log(argument)
	console.log('.')
}

main()