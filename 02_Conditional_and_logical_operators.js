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


// Задача 9

// let greeting = "";
// let lang;

// while (lang !== "ru" || lang !== "en" || lang !== "de") {
// 	lang = prompt("Введите значение:", "");
// 	console.log(lang);
// 	if (lang === "ru" || lang === "en" || lang === "de") break;
// }

// // if-else

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


// Задача 4

// let popup = confirm("Прервать цикл?");

// while (popup === false) {
// 	popup = confirm("Прервать цикл?");
// }


// Задача 5

// let num = +prompt("Введите число диапазона", "");
// let sum = 0;

// for (let i = 1; i <= num; i += 2) {
// 	sum += i;
// 	console.log(sum);
// }
// alert(`Сумма нечетных чисел: ${sum}`);


// Задача 6

// let randomNum;
// let counter = 0;

// while (true) {

// 	counter++;
// 	randomNum = Math.random();

// 	if (randomNum > 0.9) break;
// }

// alert(`Число, прервавшее цикл - ${randomNum}\nКоличество итераций - ${counter}`);

// Задача 7

// let result = "";

// for (let i = 1; i < 10; i++) {
// 	for (let j = 1; j < 10; j++) {
// 		result = result + `${i} * ${j} = ${j * i} \xa0\xa0\xa0\xa0\xa0`;
// 	}
// 	result += "<br>";
// }
// document.documentElement.innerHTML = result;

// Задача 8

// let i = 0, x = 0, y = 1;

// for(;;) {
// 	if (i <= 10) {
// 		alert(x + y);
// 		let z = x + y;
// 		x = y;
// 		y = z;
// 	} else {
// 		break;
// 	}
// 	i++;
// }


// С пустым телом цикла

// let str = "";
// for(let i = 0, x = 0, y = 1, z; i <= 10; i++, z = x + y, x = y, y = z, str = str + y + " ") {
 
// }
// console.log(str);

// Задача 9

// let sum = 0;
// let counter = 0;

// while (true) {

// 	counter++;
// 	let num = +prompt("Введите число", "");
// 	sum += num;

// 	if (!num) break;
// }

// alert(`Количество введенных чисел - ${counter - 1} \nСумма чисел - ${sum} \nСреднее арифметическое - ${Math.round(sum / counter)}`);

// Задача 10

// let password = "123";
// let enterPassword = "";

// while(enterPassword !== password) {
// 	enterPassword = prompt("Введите пароль", "");

// 	if(enterPassword === "" || !enterPassword) {
// 		let question = confirm("Вы уверены, что хотите отменить авторизацию?");
// 		if (question === true) {
// 			alert("Вы отменили авторизацию");
// 			break;
// 		} else {
// 			enterPassword = prompt("Введите пароль", "");
// 		}
// 	}
// }

// if(enterPassword === password) {
// 	alert("Вы успешно авторизованы.");
// }

// Задача 11


// for(let i = 1; i <= 50; i++) {

// 	if((i % 3 == 0) && (i % 5 == 0)) {
// 		console.log("FizzBuzz");
// 	} else if (i % 3 == 0) {
// 		console.log("Fizz");
// 	} else if (i % 5 == 0) {
// 		console.log("Buzz");
// 	} else {
// 		console.log(i);
// 	}
// }