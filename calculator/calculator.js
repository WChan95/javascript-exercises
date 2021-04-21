function add (x,y) {
	return x + y;
}

function subtract (x, y) {
	return x - y;
}

function sum (array){
	const sum = array.reduce((accumulator,currentValue) => {
		return accumulator + currentValue;}, 0);
	return sum;
}

function multiply (array) {
	const total = array.reduce((accumulator, currentValue) =>{
		return accumulator * currentValue;}, 1);
	return total;
	}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(x) {
	//x = 10, while x > 0, x--, multiply
	let accumulator = 1;
	let currentValue;
	let i;
	for(i = x; x > 0; x--){
		currentValue = x;
		accumulator = accumulator * currentValue;
	}
	return accumulator;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}