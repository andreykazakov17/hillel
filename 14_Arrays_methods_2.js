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
		displayName: 'Object Tony',
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

const fields = [
	{
		id: 30,
		fieldName: 'Date',
		permissions: {
			view: true,
			edit: true,
			remove: true
		},
		objectRelation: null
	},
	{
		id: 31,
		fieldName: 'Name',
		permissions: {
			view: true,
			edit: false,
			remove: false
		},
		objectRelation: {
			objectId: 12
		}
	},
	{
		id: 32,
		fieldName: 'Time',
		permissions: {
			view: true,
			edit: true,
			remove: false
		},
		objectRelation: {
			objectId: 2
		}
	},
	{
		id: 33,
		fieldName: 'Rating',
		permissions: {
			view: false,
			edit: false,
			remove: false
		},
		objectRelation: {
			objectId: 4
		}
	},
	{
		id: 34,
		fieldName: 'Custom Name',
		permissions: {
			view: true,
			edit: false,
			remove: false
		},
		objectRelation: {
			objectId: 7
		}
	},
	{
		id: 35,
		fieldName: 'Email',
		permissions: {
			view: true,
			edit: true,
			remove: true
		},
		objectRelation: {
			objectId: 19
		}
	},
	{
		id: 36,
		fieldName: 'Decimal',
		permissions: {
			view: true,
			edit: true,
			remove: true
		},
		objectRelation: null
	},
	{
		id: 37,
		fieldName: 'Float',
		permissions: {
			view: true,
			edit: true,
			remove: false
		},
		objectRelation: {
			objectId: 15
		}
	},
	{
		id: 38,
		fieldName: 'Radio',
		permissions: {
			view: false,
			edit: false,
			remove: false
		},
		objectRelation: null
	},
	{
		id: 39,
		fieldName: 'Custom Rating',
		permissions: {
			view: true,
			edit: true,
			remove: true
		},
		objectRelation: {
			objectId: 1
		}
	},
	{
		id: 40,
		fieldName: 'Relation',
		permissions: {
			view: true,
			edit: false,
			remove: false
		},
		objectRelation: {
			objectId: 7
		}
	},
	{
		id: 41,
		fieldName: 'Checkbox',
		permissions: {
			view: true,
			edit: true,
			remove: false
		},
		objectRelation: {
			objectId: 9
		}
	},
	{
		id: 42,
		fieldName: 'Checkboxes',
		permissions: {
			view: true,
			edit: true,
			remove: true
		},
		objectRelation: {
			objectId: 9
		}
	},
	{
		id: 43,
		fieldName: 'Dropdown',
		permissions: {
			view: false,
			edit: false,
			remove: false
		},
		objectRelation: null
	},
	{
		id: 44,
		fieldName: 'Dynamic Tags',
		permissions: {
			view: true,
			edit: false,
			remove: false
		},
		objectRelation: {
			objectId: 17
		}
	},
	{
		id: 45,
		fieldName: 'Files',
		permissions: {
			view: true,
			edit: true,
			remove: true
		},
		objectRelation: {
			objectId: 4
		}
	},
	{
		id: 46,
		fieldName: 'Long Text',
		permissions: {
			view: true,
			edit: true,
			remove: true
		},
		objectRelation: {
			objectId: 20
		}
	},
	{
		id: 47,
		fieldName: 'Phone number',
		permissions: {
			view: true,
			edit: true,
			remove: false
		},
		objectRelation: null
	},
	{
		id: 48,
		fieldName: 'Price',
		permissions: {
			view: false,
			edit: false,
			remove: false
		},
		objectRelation: {
			objectId: 8
		}
	},
	{
		id: 49,
		fieldName: 'Status',
		permissions: {
			view: true,
			edit: true,
			remove: true
		},
		objectRelation: {
			objectId: 12
		}
	},
	{
		id: 50,
		fieldName: 'Text',
		permissions: {
			view: true,
			edit: true,
			remove: true
		},
		objectRelation: {
			objectId: 18
		}
	},
	{
		id: 51,
		fieldName: 'Yes/No',
		permissions: {
			view: true,
			edit: true,
			remove: true
		},
		objectRelation: {
			objectId: 15
		}
	}
];

//console.log(fields.length);


// --------- Задача 1

// let permissionsViewArr = fields.filter((obj) => obj.permissions.view === true);
// console.log(permissionsViewArr);


// --------- Задача 2

// let falsePermissionsArr = fields.filter((obj) => {
// 	for(let [key, value] of Object.entries(obj.permissions)) {
// 		return value === false;
// 	}
// });

// console.log(falsePermissionsArr);


// --------- Задача 3

// let filteredArr = fields.filter((obj) => obj.objectRelation !== null);

// let fieldsRelationArr = filteredArr.reduce((acc, fieldItem) => {

// 	for(let obj of objects) {
// 		//console.log(obj);
	
// 		if(obj.id === fieldItem.objectRelation.objectId) {
// 			let objectIdField = {objectId: obj};
// 			let resultObj = {...fieldItem, objectRelation: objectIdField};
// 			return [...acc, resultObj];
// 		}

// 	}
// 	return acc;
// }, []);

// console.log(fieldsRelationArr);


// --------- Задача 3 - Решение через find

// let filteredArr = fields.map((fieldItem) => {

// 	if(fieldItem.objectRelation === null) {
// 		return fieldItem;
// 	} 

// 	let findObj = objects.find((obj) => obj.id === fieldItem.objectRelation.objectId);
// 	fieldItem.objectRelation.objectId = findObj;
// 	return fieldItem;

// });

// console.log(filteredArr);



// ------- Задача 4

// let filteredArr = fields.map((fieldItem) => {

// 	if(fieldItem.objectRelation === null) {
// 		return fieldItem;
// 	} 

// 	let findObj = objects.find((obj) => obj.id === fieldItem.objectRelation.objectId);
	
// 	if(findObj.enabled === true) {
// 		for(let [key, value] of Object.entries(fieldItem.permissions)) {
			
// 			fieldItem.permissions[key] = true;
// 		}

// 		return fieldItem;
// 	} else {
// 		for (let [key, value] of Object.entries(fieldItem.permissions)) {
			
// 			fieldItem.permissions[key] = false;
// 		}

// 		return fieldItem;
// 	}

// });

// console.log(filteredArr);



// ----------- Задача 5

// let filteredArr = objects.filter((obj) => {

// 	for(let field of fields) {
// 		if(field.objectRelation && field.objectRelation.objectId === obj.id) {
// 			return true;
// 		}
// 	}
// });

// console.log(filteredArr);



// ----------- Задача 6

// let fieldObj = objects.reduce((acc, item) => {

// 	let objId = item.id;

// 	for(let field of fields) {

// 		if(field.objectRelation && field.objectRelation.objectId === objId) {

// 			let fieldId = field.id;
// 			let fieldPermissions = field.permissions;

// 			if(!acc[objId]) {
// 				acc[objId] = {};
// 			}
// 			if(!acc[objId][fieldId]) {
// 				acc[objId][fieldId] = [];
// 			}
// 			if(acc[objId][fieldId]) {
// 				acc[objId][fieldId] = fieldPermissions;
// 			}
// 		}
// 	}
// 	return acc;

// }, {});

// console.log(fieldObj);



// ---------- Задача 7

// let result = fields.reduce((acc, fieldItem) => {

// 	if(fieldItem.permissions.view === true) {
// 		fieldItem.permissions.edit = true;
// 		return [...acc, fieldItem];
// 	}
// 	return [...acc, fieldItem];
// }, []);

// console.log(result);



// --------- Задача 8

// let result = fields.reduce((acc, fieldItem) => {

// 	if(fieldItem.objectRelation) {
// 		let resultObj = {...fieldItem, relations: true};
// 		return [...acc, resultObj];
// 	}
// 	return acc;
// }, []);

// console.log(result);



// --------- Задача 9

// let sorted = fields.sort((a, b) => a.fieldName.localeCompare(b.fieldName));
// console.log(sorted);



// --------- Задача 10

// let permissionsTrue = fields.some((fieldItem) => {

// 	let fields = [];

// 	for (let [key, value] of Object.entries(fieldItem.permissions)) {
			
// 		fields.push(value);
// 	}
// 	console.log(fields);

// 	let result = fields.every((item) => item === true);
// 	return result;
// });

// console.log(permissionsTrue);




// ------- Задача 4 - мое решение

// let fieldsRelationArr = fields.reduce((acc, fieldItem) => {

// 	if(!fieldItem.objectRelation) {
		
// 		return [...acc, fieldItem];
// 	} else {
// 		for(let obj in objects) {
	
// 			if(objects[obj].id === fieldItem.objectRelation.objectId) {
// 				let objectIdField = {objectId: objects[obj]};
// 				let resultObj = {...fieldItem, objectRelation: objectIdField};
// 				return [...acc, resultObj];
// 			}
	
// 		}
// 	}

	
// 	return acc;
// }, []);


// fieldsRelationArr.forEach((fieldItem, index) => {

// 	if(fieldsRelationArr[index].objectRelation && fieldsRelationArr[index].objectRelation.objectId.enabled === true) {

// 		for (let [key, value] of Object.entries(fieldsRelationArr[index].permissions)) {
			
// 			fieldItem.permissions[key] = true;
// 		}

		
// 	} else if (fieldsRelationArr[index].objectRelation && fieldsRelationArr[index].objectRelation.objectId.enabled === false) {
// 		for (let [key, value] of Object.entries(fieldsRelationArr[index].permissions)) {
			
// 			fieldItem.permissions[key] = false;
// 		}
// 	}
// });

// console.log(fieldsRelationArr);