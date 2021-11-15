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


// Задача 1

// function sortByDate(a, b) {

// 	let currentDateStr = ((a.date.split("-")).reverse()).join("-");
// 	let nextDateStr = ((b.date.split("-")).reverse()).join("-");

// 	if (currentDateStr < nextDateStr) {
// 		return -1;
// 	}
// 	if (currentDateStr > nextDateStr) {
// 		return 1;
// 	}
// 	return 0;
// }

// let sorted = objects.sort(sortByDate);
// console.log(sorted);


// Задача 2

// let dateArr = objects.filter((item) => item.enabled === true);

// console.log(dateArr);



// console.log(relationArr);


// Задача 4

// let relationArr = objects.reduce((acc, item) => {

// 	if(item.relation !== null) {
// 		let relationId = {relationId: item};
// 		let relationIdObj = {...item, relation: relationId};
// 		return [...acc, relationIdObj];
// 	}
// 	return acc;
	
// }, []);

//console.log(relationArr);


// Задача 5

// let relationArr = objects.filter((item) => item.relation !== null);
// console.log(relationArr);


//--Решение через reduce

// let relationArr = objects.reduce((acc, item) => {

// 	if(item.relation !== null) {
// 		return [...acc, item];
// 	}
// 	return acc;
	
// }, []);

// console.log(relationArr);


// Задача 6

let relationArr = objects.reduce((acc, item) => {

	if(item.relation !== null) {

		let id = item.relation.relationId;
		let relationIdArr = objects.filter((item) => item.relation?.relationId === id);

		return {...acc, [id]: relationIdArr};
	}
	return acc;
	
}, {});

console.log(relationArr);

//--------- Старое решение

// let relationArr = objects.reduce((acc, item) => {

// 	if(item.relation !== null) {

// 		let path = item.relation.relationId;
// 		let relationIdArr = objects.filter((item) => item.relation?.relationId === path);

// 		let relationId = {relationId: item.relation.relationId, relationIdArr};

// 		let relationIdObj = {...item, relation: relationId};
// 		return [...acc, relationIdObj];
// 	}
// 	return acc;
	
// }, []);

// console.log(relationArr);


// Задача 7

// let dateArr = objects.map((item) => {
	
// 	//let filterArr = objects.filter((item) => item.date.includes("2020"));
// 	if(item.date.includes("2020")) {
// 		if(item.enabled === false) {
// 			item.enabled = true;
// 		}
// 		return item;
// 	}
// });

// console.log(dateArr);
//console.log(objects);


//--Решение через reduce

// let dateArr = objects.reduce((acc, item) => {
	
// 	if(item.date.includes("2020")) {
// 		if(item.enabled === false) {
// 			item.enabled = true;
// 		}
// 		return [...acc, item];
// 	}
// 	return acc;
	
// }, []);

// console.log(dateArr);


// Задача 8

// let result = objects.map((item) => {

// 	if(item.relation === null) {
// 		item.enabled = false;
// 		return item;
// 	} else if(item.relation !== null){
// 		let id = item.relation.relationId;
// 		let findObj = objects.find((obj) => {
// 			obj.id === id;
// 			console.log(obj);
// 			return obj;
// 		});
// 		item.enabled = findObj.enabled;
// 		return item;
// 	}
// });

// console.log(result);
//console.log(objects);


//--Решение через reduce

// let result = objects.reduce((acc, item) => {
	
// 	if(item.relation === null) {
// 		item.enabled = false;
// 		return [...acc, item];
		
// 	} else if(item.relation !== null) {

// 		item.enabled = item.relation.relationId;
// 		return [...acc, item];
// 	}
// 	return acc;
	
// }, []);

// console.log(result);


// Задача 9

// let hasRelation = objects.every((item) => item.relation);
// console.log(hasRelation);


// Задача 10

// let hasEnabled = objects.some((item) => item.enabled === true);
// console.log(hasEnabled);