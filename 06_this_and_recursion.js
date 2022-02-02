// Задача 1

// let calculator = {
// 	read() {
// 		this.x = +prompt("Введите значение", "");
// 		this.y = +prompt("Введите значение", "");
// 	},
// 	sum() {
// 		return this.x + this.y;
// 	},
// 	multi() {
// 		return this.x * this.y;
// 	},
// 	diff() {
// 		return this.x - this.y;
// 	},
// 	div() {
// 		return this.x / this.y;
// 	}
// };

// console.log(calculator.read());
// console.log(calculator.sum());
// console.log(calculator.multi());
// console.log(calculator.diff());
// console.log(calculator.div());


// Задача 2

// let coffeeMachine = {
// 	message: "Your coffee is ready!",
// 	start() {
// 		setTimeout(() => alert(this.message), 3000);
// 	}
// };

// coffeeMachine.start();


// Задача 3

// let counter = {
// 	count: 0,
// 	inc() {
// 		this.count++;
// 		return this;
// 	},
// 	dec() {
// 		this.count--;
// 		return this;
// 	}
// };

// let current = counter.inc().inc().inc().dec().dec();
// alert(current.count);


// Задача 4

// let getMathOper = {
// 	getSum(x, y) {
// 		this.x = x;
// 		this.y = y;
// 		return `${x} + ${y} = ${calculator.sum.call(this)}`;
// 	},
// 	getDiff(x, y) {
// 		this.x = x;
// 		this.y = y;
// 		return `${this.x} - ${this.y} = ${calculator.diff.call(this)}`;
// 	},
// 	getMulti(x, y) {
// 		this.x = x;
// 		this.y = y;
// 		return `${this.x} * ${this.y} = ${calculator.multi.call(this)}`;
// 	},
// 	getDiv(x, y) {
// 		this.x = x;
// 		this.y = y;
// 		return `${this.x} / ${this.y} = ${calculator.div.call(this)}`;
// 	}
// };

// alert(getMathOper.getSum(7, 2));
// alert(getMathOper.getDiff(7, 2));
// alert(getMathOper.getMulti(7, 2));
// alert(getMathOper.getDiv(1, 0));


// Задача 5

// let country = {
// 	name: "Ukraine",
// 	language: "ukrainian",
// 	capital: {
// 		name: "Kyiv",
// 		population: 2907817,
// 		area: 847.66
// 	}
// };

// function format(start, end) {
// 	console.log(start + this.name + end);
// }

// format.call(country, "", "");
// format.apply(country, ["[", "]"]);
// format.call(country.capital, "", "");
// format.apply(country.capital, ["", ""]);
// format.apply(undefined, [""]);


// Задача 6

// let user = {
// 	name: "Andrey"
// };

// function format(start, end) {
// 	console.log(start + this.name + end);
// }

// format.call(user, "<<<", ">>>");

// //---Решение через Bind
// let bindRes = format.bind(user);
// bindRes("<<<", ">>>");


// // Задача 7

// function concat(separator, firstStr, secondStr) {
// 	console.log(firstStr + separator + secondStr);
// }

// let hello = concat.bind(null, ": ", "Hello");
// hello("World");
// hello("John");


// Рекурсия - Задача 1

// let n = 4;

// function cube(num) {

// 	n = n - 1;

// 	if(n === 0) {
// 		return 1;
// 	} else {
// 		return num * cube(num);
// 	}
	
// }

// console.log(cube(3));



// Рекурсия - Задача 2

// function sum(...args) {
// 	if(args.length === 1) {
// 		return args[0];
// 	}
// 	let lastElem = args.pop();
// 	let preLastElem = args.pop();
// 	return sum(...args, lastElem + preLastElem);
// }

// console.log(sum(1, 2, 3, 4, 5, 6));


//----------------------------------------------

// Факториал через рекурсию

// function factorial(n) {
// 	if (n == 0) {
// 		return 1;
// 	}

// 	return factorial(n - 1) * n;
// }

// console.log(factorial(5));


// Алгоритм Евклида

// function gcd(a, b) {
// 	if(0 === b) return a;
// 	return gcd(b, a % b);
// }

// console.log(gcd(13, 28));


// Возведение в степень c явной передачей аргумента

// function power(a, n) {

// 	if(n === 0) return 1;
// 	console.log(n);
// 	return a * power(a, n - 1);
// }

// console.log(power(3, 3));