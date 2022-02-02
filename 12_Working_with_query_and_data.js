let btn = document.createElement("button");
btn.innerHTML = "Получить данные";
document.body.prepend(btn);
const section = document.createElement("section");


// Обработка события и получение данных

function getData(url) {
	fetch(url)
		.then((response) => response.json())
		.then((data) => createContent(data.planets));
}

btn.addEventListener("click", (event) => {
	event.preventDefault();

	getData("https://trevadim.github.io/vue/data/data.json");
	
	btn.style.display = "none";
});


// Обработка данных и создание контента

const createContent = (data) => {

	let objects = (Object.values(data));

	for(let obj in objects) {
		
		const planetDiv = document.createElement("div");
		const h2 = document.createElement("h2");
		const img = document.createElement("img");

		let planetObj = objects[obj];

		let strArr = Object.values(planetObj.info);
		console.log(typeof planetObj.info);
		
		for(let str of strArr) {
			const p = document.createElement("p");
			p.innerHTML = str;
			planetDiv.appendChild(p);
		}

		h2.innerHTML = planetObj.title;
		img.src = planetObj.url;
		planetDiv.prepend(h2);
		planetDiv.appendChild(img);
		section.appendChild(planetDiv);
		
	}
	document.body.prepend(section);
};