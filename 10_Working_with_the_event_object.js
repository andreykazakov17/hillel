// Считываем координаты страницы

let h2 = document.createElement("h2");
h2.innerHTML = "События";
document.body.prepend(h2);

let documentCoordinates = document.createElement("div");

document.onmousemove = function mouseMove(event){
	documentCoordinates.innerHTML = `X: ${event.clientX} Y: ${event.clientY}`;
};

h2.after(documentCoordinates);

// Создаем внутреннее поле и считываем координаты

let eventsField = document.createElement("div");
eventsField.style = `width: 400px; height: 400px; border: 1px solid black`;

document.body.append(eventsField);


let fieldCoordinates = document.createElement("div");

eventsField.addEventListener("mousemove", (event) => {
	fieldCoordinates.innerHTML = `Координаты внутри блока - X: ${event.offsetX} Y: ${event.offsetY}`;
});

document.body.append(fieldCoordinates);