// Задача 1

// let arr = [1, 2, 3, "a", "b", "c", "4", "5", "6"];
// let sum = 0;

// for(let key in arr) {
	
// 	if(Number.isNaN(+arr[key])) {
// 		continue;
// 	}
// 	// Number(arr[key]);
// 	sum += +arr[key];
// }

// alert(`Сумма: ${sum}`);

// Задача 2

// let arrLength = +prompt("Какая будет длина массива", "10");
// let arr = [];

// for(let i = 0; i < arrLength; i++) {

// 	let randomNum = Math.random() * 10;
// 	arr.push(randomNum.toFixed(2));

// }

// console.log(arr);

// for(let i = 0; i < arr.length; i++) {
// 	let pow = (+arr[i]) ** 5;
// 	console.log(pow.toFixed(4));
// }

// Задача 3

// let frameworks = ["AngularJS", "jQuery"];
// frameworks.unshift("Backbone.js");
// frameworks.push("ReactJS", "Vue.js");
// frameworks.splice(2, 0, "CommonJS");

// console.log(frameworks);

// let elemIndex = frameworks.indexOf("jQuery");
// alert(`Это здесь лишнее: ${frameworks.splice(elemIndex, 1)}`);

// console.log(frameworks);

// Задача 4

// let text = "Как однажды Жак звонарь сломал фонарь головой";

// let arr = text.split(" ");

// arr.splice(1, 1);
// arr.splice(3, 0, "однажды");
// arr.splice(arr.length - 1, 1);
// arr.splice(5, 0, "головой");
// let newText = arr.join(" ");

// alert(`Исходный: ${text} \nИтоговый: ${newText}`);

// Задача 5 и 6

// let person = {
// 	firstName: "Luke",
// 	lastName: "Skylwalker",
// 	homeworld: "Tatooine",
// 	rank: "jedi-master",
// 	gender: "male"
// };

// let property = prompt("Какое свойство нужно найти?", "");

// if(property in person) {
// 	if(person[property] !== undefined) {
// 		alert(`Свойство "${property}" есть в объекте "person" и имеет значение "${person[property]}"`);
// 	}
// } else {
// 	let newProperty = prompt("Такого свойства нет, чтобы добавить, введите значение", "");
// 	person[property] = newProperty;
// 	console.log(person);
// }

// let phone = {};

// for(let i = 0; i < 3; i++) {
// 	phone[prompt("Введите свойство", "")] = prompt("Введите значение свойства", "");
// }

// console.log(Object.assign(person, phone));

// Задача 7

// let dates = {};

// dates.firstDate = Date.now();
// dates.secondDate = dates.firstDate - (365 * 24 * 60 * 60 * 1000);

// let userDate = Date.parse(prompt("Введите дату в формате 'yyyy-mm-dd'", ""));

// if(userDate > dates.secondDate && userDate < dates.firstDate) {
// 	alert("Дата попадает в диапазон.");
// } else {
// 	alert("Дата не попадает в диапазон.");
// }

// Задача 8

// let arr = [];

// let iterationLength = prompt("Сколько нужно итераций?", "");

// for(let i = 0; i < iterationLength; i++) {
// 	let symbols = prompt("Введите символы", "");
// 	arr.push(symbols);
// }

// let sum = 0;

// for(let key in arr) {
	
// 	if(Number.isNaN(+arr[key])) {
// 		continue;
// 	}

// 	sum += +arr[key];
// }

// alert(`Сумма всех чисел массива: ${sum}`);

// Задача 9

// let table = [];

// for (let i = 1; i < 10; i++) {
// 	let arr = [];

// 	for (let j = 1; j < 11; j++) {
// 		let result = `${i}x${j}=${j * i}`;

		
// 		arr.push(result);
		
// 	}
// 	table.push(arr);
// }

// console.log(table);


// Задача 10

// let htmlPicture = {
// 	elemImgOpened: "<img",
// 	otherProp: {
// 		source: 'src="https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"',
// 		alternative: 'alt=""',
// 		elemStyle: 'style="border: 1px solid #ccc"',
// 		elemWidth: 'width="200"'
// 	},
// 	elemImgClosed: "/>"
// };

// let htmlStr = "";
// let values = Object.values(htmlPicture);

// for(let value in values) {
// 	htmlStr += values[value];

// 	if(typeof values[value] === "object") {
// 		for(let value2 in values[value]) {
// 			htmlStr += values[value][value2];
// 		}
// 	}
// }

// let newStr = htmlStr.replace("[object Object]", " ");

// document.documentElement.innerHTML = newStr;