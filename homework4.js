// Задача 1

// function getMaxNum(firstNum, secondNum) {
// 	return Math.round(Math.max(firstNum, secondNum));
// }

// console.log(getMaxNum(4, 7));


// Задача 2

// function getMinNum(firstNum, secondNum, ...restNums) {
// 	if(firstNum < secondNum && restNums === undefined) {
// 		return firstNum;
// 	} else if (firstNum > secondNum && restNums === undefined) {
// 		return secondNum;
// 	} else if (restNums !== undefined) {
// 		restNums.join(", ");
// 		restNums.unshift(firstNum, secondNum);

// 		let minNum = restNums[0];
// 		for(let i = 1; i < restNums.length; ++i) {

// 			if (restNums[i] < minNum) {
// 				minNum = restNums[i];
// 			}
			
// 		}
// 		return minNum;
// 	}
// }

// console.log(getMinNum(7, 4, 8, 1, 21, 6, 2));
// console.log(getMinNum(21, 56));
// console.log(getMinNum(47, 81, 14));


// Задача 3

// let users = [
// 	{
// 		firstname: "James",
// 		lastname: "LeBron",
// 		age: 36
// 	},
// 	{
// 		firstname: "Oprah",
// 		lastname: "Winfrey",
// 		age: 67
// 	},
// 	{
// 		firstname: "Jessica",
// 		lastname: "Whinstone",
// 		age: 17
// 	},
// 	{
// 		firstname: "Katy",
// 		lastname: "Perry",
// 		age: 37
// 	},
// 	{
// 		firstname: "Robert",
// 		lastname: "Downey Jr.",
// 		age: 56
// 	},
// 	{
// 		firstname: "Steven",
// 		lastname: "Spielberg",
// 		age: 74
// 	},
// 	{
// 		firstname: "Jennifer",
// 		lastname: "Lawrence",
// 		age: 31
// 	},
// 	{
// 		firstname: "Kanye",
// 		lastname: "West",
// 		age: 44
// 	},
// 	{
// 		firstname: "Tiger",
// 		lastname: "Woods",
// 		age: 45
// 	},
// 	{
// 		firstname: "John",
// 		lastname: "Wick",
// 		age: 8
// 	},
// ];

// function filterUsers(users) {
// 	let result = users.filter(user => user.age < 18);
// 	return result;
// }

// console.log(filterUsers(users));

// function addFullName(users) {
// 	users.forEach(user => {
// 		user.fullname = `${user.firstname} ${user.lastname}`;
// 	});
// 	return users;
// }


// console.log(addFullName(users));

// function createFullnameArr(users) {
// 	let result = users.map(user => {
// 		user.fullname = `${user.firstname} ${user.lastname}`;
		
// 		for(let key in user) {
// 			if(user[key] !== user["fullname"]) {
// 				delete user[key];
// 			}
// 		}
// 		return user;
// 	});

// 	return result;
// }

// console.log(createFullnameArr(users));


// Задача 4

// let arr = [5, 7, 8, 6, 2, 3];

// function deleteFirstElem(arr) {
// 	arr.splice(0, 1);
// 	return arr;
// }

// console.log(deleteFirstElem(arr));


// Задача 5

// let arr = [5, 7, 8, 6, 2, 3];

// function addArrElements(arr, ...elems) {
// 	let result = [...arr, ...elems];
// 	return result;
// }

// console.log(addArrElements(arr, 2, 4, 5, 6));


// Задача 6

// let source = {
// 	firstname: "Tom",
// 	age: 10,
// };

// function extendObj(obj, ...restObj) {
	
// 	for(let i = 0; i < restObj.length; i++) {
// 		for(let prop in restObj[i]) {
// 			obj[prop] = restObj[i][prop];
// 		}
// 	}
// 	return obj;
// }

// console.log(extendObj(source, {firstname: "John"}, {lastname: "Doe"}));


// Задача 7

// function setComment(date, message, author = "Anonymous") {
// 	if(date == undefined || message == undefined) {
// 		alert("Данные переданы некорректно!");
// 		return;
// 	}

// 	console.log(`${author}, ${date} \n${message}`);
// }

// setComment("2016-11-02");


// Замыкания
// Задача 1

// function createTimer() {
// 	let t0 = performance.now();

// 	return function() {
// 		let t1 = performance.now();
// 		return t1 - t0;
// 	};
// }

// let timer = createTimer();
// alert("!");
// alert(timer());


// Задача 2

// function createAdder(param) {
// 	let result1 = param;

// 	return function(param) {
// 		let result2 = param;
// 		return result1 + result2;
// 	};
// }

// console.log(createAdder());

// let hello = createAdder("Hello, ");

// console.log(hello("John"));
// console.log(hello("Harry"));

// let plus = createAdder(5);
// console.log(plus(1));
// console.log(plus(5));

// Задача с урока

// let arr = [
// 	{id: 1, name: "John", gender: "m", age: 24},
// 	{id: 2, name: "Kate", gender: "f", age: 4},
// 	{id: 3, name: "Poll", gender: "m", age: 21},
// 	{id: 4, name: "Lena", gender: "f", age: 24},
// 	{id: 5, name: "Tim", gender: "m", age: 33},
// 	{id: 6, name: "Tom", gender: "m", age: 45},
// 	{id: 7, name: "Chris", gender: "m", age: 73},
// 	{id: 8, name: "Alice", gender: "f", age: 12},
// ];

// arr.push({id: 9, name: "Jax", gender: "m", age: 32}, {id: 10, name: "Sonya", gender: "m", age: 25});

// console.log(arr);

// let isBigger10 = arr.some((item) => item.id > 10);
// console.log(isBigger10);

// let elem = arr.find((item) => item.name === "Kate");
// console.log(elem);

// let nameArr = arr.map((item) => {
// 	return item.name;
// });
// console.log(nameArr);