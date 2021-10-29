// Задача 1

// let x = +prompt("Введите число", "");

// if (x < 0) {
// 	alert("x - отрицательное число");
// } else if (x > 0) {
// 	alert("x - положительное число");
// } else {
// 	alert("x равна 0");
// }

// Задача 2

// let userCash = +prompt("Сколько у Вас денег?", "");

// let friendCash = +prompt("Сколько у вашего друга?", "");
// if ((userCash + friendCash) > 800) {
// 	alert("Майорка уже ждет!");
// } else {
// 	alert("Придется пить пиво(");
// }

// Задача 3

// let age = +prompt("Ваш возраст?", "");

// if (age >= 20 && age < 27) {
// 	alert("Выслать повестку");
// }

// Задача 4

// let taxiNumber = +prompt("Какой номер у маршрутки?", "");

// if (taxiNumber === 7 || taxiNumber === 225 || taxiNumber === 255) {
// 	alert("Едем домой!");
// } else {
// 	alert("Ждем дальше.")
// }

// Задача 5

// let day = prompt("Какой сегодня день?", "");

// if (day !== "Суббота" && day !== "Воскресенье") {
// 	alert("Пора идти на работу.");
// } else {
// 	alert("Отдыхаем.");
// }

// Задача 6


// let x = +prompt("Введите переменную x:", "");
// let y = +prompt("Введите переменную y:", "");

// while ((x < -20 || x > 20) && (y < -20 || y > 20)) {
// 	x = +prompt("Введите переменную x:", "");
// 	y = +prompt("Введите переменную y:", "");
// }

// if (x <= 1 && (y >= 3 || y < 0)) {
// 	alert(`Сумма: ${x + y}`);
// } else {
// 	alert("Неверно!");
// } 

// Задача 7

// let x = +prompt("Введите переменную x:", "");
// let y = +prompt("Введите переменную y:", "");

// if ((x > 2 && x < 11) || (y >= 6 && y < 14)) {
// 	alert(`Результат: ${x + 2}`);
// } else {
// 	alert(`Результат: ${x + 5}`);
// }

// Задача 8

// let userName = prompt("Введите имя:", "");

// while (userName == "" || userName == null) {
// 	userName = prompt("Введите имя:", "");
// }

// if (userName) {
// 	alert("Hi!")
// }

// Задача 9 - не получается сделать проверку циклом while по типу такой:
// while (lang !== "ru" || lang !== "en" || lang !== "de") {
// 	lang = prompt("Введите значение:", "");
// 	console.log(lang);
// }

// let greeting = "";
// let lang = prompt("Введите значение:", "");

// if-else

// if (lang === "ru") {
// 	greeting = "Привет, друг!";
// 	alert(greeting);
// } else if (lang === "en") {
// 	greeting = "Hello, friend!";
// 	alert(greeting);
// } else {
// 	greeting = "Hallo, freund!";
// 	alert(greeting);
// }

// switch-case

// switch(lang) {
// case "ru":
// 	greeting = "Привет, друг!";
// 	alert(greeting);
// 	break;
// case "en":
// 	greeting = "Hello, friend!";
// 	alert(greeting);
// 	break;
// case "de":
// 	greeting = "Hallo, freund!";
// 	alert(greeting);
// 	break;
// }

// Задача 10

// let month = new Date().getMonth();

// if (month == 11 && month <= 1) {
// 	alert("Сейчас зима!");
// } else if (month >= 2 && month <= 4) {
// 	alert("Сейчас весна!");
// 	console.log(month);
// } else if (month >= 5 && month <= 7) {
// 	alert("Сейчас лето!");
// } else if (month >= 8 && month <= 10) {
// 	alert("Сейчас осень!");
// }

// Задача 11

// let lang = prompt("Введите язык", "");
// let day = +prompt("Введите день", "");
// let result;

// switch(day) {
// case 0:
// 	if (lang == "ru") {
// 		result = "Понедельник";
// 		alert(result);
// 	} else if (lang == "en") {
// 		result = "Monday";
// 		alert(result);
// 	}
// 	break;
// case 1:
// 	if (lang == "ru") {
// 		result = "Вторник";
// 		alert(result);
// 	} else if (lang == "en") {
// 		result = "Tuesday";
// 		alert(result);
// 	}
// 	break;
// case 2:
// 	if (lang == "ru") {
// 		result = "Среда";
// 		alert(result);
// 	} else if (lang == "en") {
// 		result = "Wednesday";
// 		alert(result);
// 	}
// 	break;
// case 3:
// 	if (lang == "ru") {
// 		result = "Четверг";
// 		alert(result);
// 	} else if (lang == "en") {
// 		result = "Thursday";
// 		alert(result);
// 	}
// 	break;
// case 4:
// 	if (lang == "ru") {
// 		result = "Пятница";
// 		alert(result);
// 	} else if (lang == "en") {
// 		result = "Friday";
// 		alert(result);
// 	}
// 	break;
// case 5:
// 	if (lang == "ru") {
// 		result = "Суббота";
// 		alert(result);
// 	} else if (lang == "en") {
// 		result = "Saturday";
// 		alert(result);
// 	}
// 	break;
// case 6:
// 	if (lang == "ru") {
// 		result = "Воскресенье";
// 		alert(result);
// 	} else if (lang == "en") {
// 		result = "Sunday";
// 		alert(result);
// 	}
// 	break;
// }

// Задача 12

// let userName = prompt("Введите имя", "");
// let userAge = +prompt("Введите возраст", "");

// switch(userName) {
// case "John":
// 	if(userAge === 29) {
// 		console.log(`Привет ${userName} ${userAge}`);
// 	} else {
// 		console.log("Пока");
// 	}
// 	break;
// case "Kate":
// 	if(userAge === 15) {
// 		console.log(`Привет ${userName} ${userAge}`);
// 	} else {
// 		console.log("Пока");
// 	}
// 	break;
// default:
// 	console.log("Пока");
// }

// Решение через тернарный оператор ?

// let userName = prompt("Введите имя", "");
// let userAge = +prompt("Введите возраст", "");

// if (userName === "John") {
// 	userAge === 29 ? console.log(`Привет ${userName} ${userAge}`) : console.log("Пока");
// } else if (userName === "Kate") {
// 	userAge === 15 ? console.log(`Привет ${userName} ${userAge}`) : console.log("Пока");
// } else {
// 	console.log("Пока");
// }

// --- Циклы

// Задача 1

// let str = "";

// for (let i = 0; i < 5; i++) {
// 	str += ".#";
// }

// alert(str);

// Задача 2

// for (let i = 2; i <= 10; i++) {
// 	if (i % 2 == 0) {
// 		console.log(i * 2);
// 	}
// }

// Задача 3

// let username = "Luke Skylwalker";

// for (let i = 0; i < 3; i++) {
// 	if (i === 2) {
// 		console.log(`Happy birthday dear ${username}`);
// 	}
// 	console.log("Happy birthday to you");
// } 

