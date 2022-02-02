// Задача 1

// let a = 7;
// let b = a * 3;
// let c = a + b;

// alert(`Variables: a = ${a}, b = ${b}, c = ${c}`);

// Задача 2

// let firstName = prompt("Enter your name.", "");
// let lastName = prompt("Enter your last name.", "");
// alert(`What's up, ${firstName} ${lastName}?`);

// Задача 3

// let x = +prompt("Enter the first number, please", "");
// let y = +prompt("Enter the second number, please", "");
// let multiply = x * y;
// let quotient = x / y;
// let difference = x - y;
// let summary = x + y;
// alert(`Results: multiply - ${multiply}, quotient - ${quotient}, difference - ${difference}, summary - ${summary}`);

// Задача 4

// let workingHours = +prompt("What's number of working hours in the day?", "");
// let weeklyWorkingDays = +prompt("What's number of working days in the week?", "");
// let hourlyRate = +prompt("What's your hourly rate?", "");
// let count = workingHours * weeklyWorkingDays * 4 * hourlyRate;
// alert(`Your monthly salary: ${count}`);

// Задача 5

// let number = +prompt("Enter a number", "");
// let isEven = !(number % 2);
// alert(`Result: ${isEven}`);

// Задача 6 - насколько я знаю, все данные, которые 
// приходят от пользователя будут строкой - 
// поэтому в моей реализации задачи в варианте, 
// чтобы получить "Yes!" нужен унарный плюс перед prompt, 
// чтобы преобразовать строку в число 

// let number = +prompt("Is a number?", "");
// if (typeof number === "number") {
// 	alert("Yes!");
// } else {
// 	alert("No!");
// }

// Задача 7

let randomNumber = Math.floor(((Math.random() * 10) + 1) * 100);
let promptNumber = +prompt("Please, enter a number here", "");
let isBigger = randomNumber < promptNumber;
alert(`Results: ${randomNumber} is less than ${promptNumber} - ${isBigger} \nRandom number - ${randomNumber}, user number - ${promptNumber}`);

// Задача 8

// let str = prompt("Что Вам нравится?", "Мне нравится изучать Front-end");
// let anotherStr = prompt("Что Вам нравится?", "Мне нравится изучать английский");
// let isContainStr = str.includes(anotherStr.slice(-10));
// let myHobby = anotherStr.slice(-10);
// alert(`Variable "str" is contains "anotherStr"?: ${isContainStr}`);

// let newStr = str.substring(0, 20);
// let result = `${newStr} ${myHobby}`;
// alert(result);

