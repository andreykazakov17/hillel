const objects = [
	{
		id: 1,
		displayName: 'Object John',
		date: '10-12-2020',
		enabled: true,
		relation: null
	},
	{
		id: 2,
		displayName: 'Object Kate',
		date: '21-06-2020',
		enabled: false,
		relation: {
			relationId: 1
		}
	},
	{
		id: 3,
		displayName: 'Object Bob',
		date: '03-04-2020',
		enabled: true,
		relation: {
			relationId: 1
		}
	},
	{
		id: 4,
		displayName: 'Object Alex',
		date: '12-12-2021',
		enabled: false,
		relation: null
	},
	{
		id: 5,
		displayName: 'Object Pooja',
		date: '30-07-2019',
		enabled: true,
		relation: {
			relationId: 4
		}
	},
	{
		id: 6,
		displayName: 'Object Scott',
		date: '15-02-2021',
		enabled: true,
		relation: {
			relationId: 2
		}
	},
	{
		id: 7,
		displayName: 'Object Sergey',
		date: '06-01-2020',
		enabled: true,
		relation: {
			relationId: 5
		}
	},
	{
		id: 8,
		displayName: 'Object Adhey',
		date: '21-03-2021',
		enabled: true,
		relation: {
			relationId: 5
		}
	},
	{
		id: 9,
		displayName: 'Object Travis',
		date: '10-08-2021',
		enabled: true,
		relation: {
			relationId: 1
		}
	},
	{
		id: 10,
		displayName: 'Object Artem',
		date: '24-09-2021',
		enabled: false,
		relation: {
			relationId: 4
		}
	},
	{
		id: 11,
		displayName: 'Object Stuart',
		date: '01-04-2020',
		enabled: true,
		relation: {
			relationId: 7
		}
	},
	{
		id: 12,
		displayName: 'Object Keith',
		date: '08-05-2020',
		enabled: true,
		relation: {
			relationId: 10
		}
	},
	{
		id: 13,
		displayName: 'Object Bill',
		date: '17-10-2020',
		enabled: true,
		relation: {
			relationId: 9
		}
	},
	{
		id: 14,
		displayName: 'Object Chuck',
		date: '15-04-2020',
		enabled: true,
		relation: null
	},
	{
		id: 15,
		displayName: 'Object Joel',
		date: '09-12-2020',
		enabled: true,
		relation: null
	},
	{
		id: 16,
		displayName: 'Object Tim',
		date: '12-01-2020',
		enabled: true,
		relation: {
			relationId: 15
		}
	},
	{
		id: 17,
		displayName: 'Object Kevin',
		date: '05-09-2020',
		enabled: true,
		relation: {
			relationId: 7
		}
	},
	{
		id: 18,
		displayName: 'Object Jessica',
		date: '19-07-2021',
		enabled: true,
		relation: {
			relationId: 12
		}
	},
	{
		id: 19,
		displayName: 'Object Monica',
		date: '08-02-2021',
		enabled: true,
		relation: {
			relationId: 14
		}
	},
	{
		id: 20,
		displayName: 'Object Tony',
		date: '05-09-2020',
		enabled: true,
		relation: {
			relationId: 7
		}
	}
];

// Задача 3

// let monthsArr = objects.map((item) => {

// 	return ((item.date).slice(3, 5));

// });



// let monthsArr = objects.map((item) => {

// 	let month = item.date.slice(3, 5);

// 	return month;
// });

// //console.log(unique(monthsArr));
// let monthElem = unique(monthsArr);

// for(let obj of objects) {
		

// 	for(let month of monthElem) {
// 		if(objects[obj].indexOf(monthElem[month])) {
// 			return [];
// 		}
// 	}
// }



// console.log(sameMonthArr);







// let monthsObj = objects.reduce((acc, item) => {

// 	let arr = unique(monthsArr);

// 	for(let i = 0; i < arr.length; i++) {
// 		if (item.date.includes(arr[i])) {
// 			return acc;
// 		}
// 	}
// 	return acc;

// 	// let month = item.date.slice(3, 5);
// 	// let year = item.date.slice(-4) === year;
// 	// let monthArr = objects.filter((object) => {
// 	// 	object.date.slice(3, 5) === month
// 	// }));

// 	// return monthArr;

// }, []);

// console.log(monthsObj);


//------------------------------
// function unique(arr) {
// 	let result = [];

// 	for(let value of arr) {
// 		if(!result.includes(value)) {
// 			result.push(value);
// 		}
// 	}
// 	return result;
// }

// let monthsArr = objects.map((item) => {
// 	return item.date.slice(3, 5);
// });

// let monthsSortedArr = (unique(monthsArr));
// //console.log(monthsSortedArr);


// let monthsObj = monthsSortedArr.reduce((acc, item) => {

	
// 	let arr = objects.map((obj) => obj.date.slice(3, 4));
// 	//console.log(arr);

// 	return {
// 		...acc,
// 		[item]: arr
// 	};
// }, {});
// //console.log(monthsObj);
// //-----------------------------------------------


// let months = objects.reduce((acc, item) => {

// 	let monthKey = item.date.slice(3, 5);
// 	let monthSearchKey = item.date.slice(2, 5);


// 	let monthsFilter = objects.filter((obj) => {
// 		if(obj.date.includes(monthSearchKey)) {
// 			return obj;
// 		}
// 	});

// 	return {...acc, [monthKey]: monthsFilter};

// }, {});
// console.log(months);


// let years = objects.reduce((acc, item) => {

// 	let year = item.date.slice(-4);

// 	let yearsFilter = objects.filter((obj) => {
// 		if(obj.date.includes(year)) {
// 			return obj;
// 		}
// 	});

// 	return {...acc, [year]: yearsFilter};

// }, []);
// console.log(years);

// for(let monthsArr in months) {
// 	console.log(monthsArr);
// 	for(let monthObj of monthsArr) {
// 		for(let objProp in monthObj) {
// 			console.log(objProp.date);
// 		}
// 	}
// }


//console.log(years);


// let reducer = objects.reduce((acc, item) => {

// 	let monthKey = item.date.slice(3, 5);
// 	let monthSearchKey = item.date.slice(2, 6);
// 	let year = item.date.slice(-4);


// 	// let monthsFilter = objects.filter((obj) => {
// 	// 	if(obj.date.includes(monthSearchKey)) {
// 	// 		return obj;
// 	// 	}
// 	// });
// 	//let monthsArr = 

// 	function unique(arr) {
// 		let result = [];
	
// 		for(let value of arr) {
// 			if(!result.includes(value)) {
// 				result.push(value);
// 			}
// 		}
// 		return result;
// 	}

// 	function toObject(arr) {
// 		let result = {};
// 		for (let value of arr) {
// 			result[value] = arr[value];
// 		}
// 		return result;
// 	}
	
// 	let monthsArr = objects.map((item) => {
// 		return item.date.slice(3, 5);
// 	});
	
// 	let monthsSortedArr = (unique(monthsArr));
// 	let monthsObj = toObject(monthsSortedArr);

// 	let resultObj = {...acc, [year]: monthsObj};

// 	return resultObj;

// }, []);

// console.log(reducer);


// for(let key in reducer) {
// 	console.log(reducer[key]);
// 	for(let obj in objects) {
// 		//console.log(objects[obj]);
// 		if(reducer.hasOwnProperty(objects[obj].date.slice(3, 5)) === objects[obj].date.includes(objects[obj].date.slice(3, 5))) {
// 			console.log(Object.assign(reducer[key], objects[obj]));
			
// 		}
// 	}
// }


// for(let value of arr) {

// 	let monthKey = value.date.slice(3, 5);
// 	let monthSearchKey = value.date.slice(2, 6);
// 	let year = value.date.slice(-4);

// 	if(reducer.hasOwnProperty(year)) {
// 		for(let key in reducer) {
// 			if(reducer[key].hasOwnProperty(monthKey)) {
// 				reducer[key] = value;
// 			}
// 		}
// 	}
// }

// for(let key in reducer) {
// 	if(reducer[key] === )
// }


// console.log(reducer);


// let dateObj = objects.reduce((acc, item) => {

// 	let year = (item.date.split("-"))[2];
// 	let month = (item.date.split("-"))[1];
// 	// let months = 

// 	//let monthsArr = [1];
	
// 	let monthObj = {};
// 	let yearObj = {};

// 	if(!acc[year]) {
// 		acc = {...acc, [year]: {}};
// 		if(!acc[year][month]) {
// 			acc = {...acc, [year]: {...acc[year], [month]: []}};
// 			if(!acc[year][month][item]) {
// 				acc = {...acc, [year]: {...acc[year], [month]: [{...item}]}};
// 			}
// 		}
// 		//return acc;
// 	}

// 	// if(!yearObj[month]) {
// 	// 	monthObj = {...acc, [month]: []};
// 	// } else if (monthObj[month]) {
// 	// 	return acc;
// 	// }
	
	
// 	return acc;
	
	
// }, {});

// console.log(dateObj);




