class Figure {
	constructor(x, y, color) {
		this.x = x;
		this.y = y;
		this.color = color;
	}

	draw() {
		console.log("Сейчас будем рисовать");
	}
}

class Line extends Figure {
	constructor(x, y, x1, y1, color) {
		super(x, y, color);

		this.x1 = x1;
		this.y1 = y1;
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.strokeStyle = this.color;
		ctx.moveTo(this.x, this.y);
		ctx.lineTo(this.x1, this.y1);
		ctx.stroke();
		ctx.closePath();
	}
}

class Rect extends Figure {
	constructor(x, y, color, width, height) {
		super(x, y, color);

		this.width = width;
		this.height = height;
	}

	draw(ctx) {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

class Circle extends Figure {
	constructor(x, y, color, radius) {
		super(x, y, color);

		this.radius = radius;

		this.startAngle = 0;
		this.radians = (Math.PI/180)*360;
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.arc(this.x, this.y, this.radius, this.startAngle, this.radians);
		ctx.fill();
		ctx.closePath();
	}
}
 
class Canvas {
	constructor(id) {
		this.canvas = document.getElementById(id);
		
	}

	add(...figures) {

		let ctx = this.canvas.getContext("2d");
		ctx.globalAlpha = 0.5;

		for(let figure of figures) {
			figure.draw(ctx);
		}
	}
}

let drawArea = new Canvas("canvasID");

// Линии

let topLine = new Line(100, 600, 400, 470, "grey");
drawArea.add(topLine);
let bottomLine = new Line(120, 620, 420, 490, "grey");
drawArea.add(bottomLine);


// Инициализация линий для зигзага

let firstLine = new Line(0, 0, 20, 20, "grey");
let secondLine = new Line(20, 20, 40, 0, "grey");
drawArea.add(firstLine, secondLine);

// Рисуем зигзаг

function lineLoop(oddLine, evenLine) {
	for(let i = 0; i < 100; i++) {
		if(i % 2 === 1) {
			oddLine.x = oddLine.x + 40;
			oddLine.x1 = oddLine.x1 + 40;
			drawArea.add(oddLine);
		}
	}
	for(let i = 0; i < 100; i++) {
		if(i % 2 === 0) {
			evenLine.x = evenLine.x + 40;
			evenLine.x1 = evenLine.x1 + 40;
			drawArea.add(evenLine);
		}
	}
}
lineLoop(firstLine, secondLine);

// Рисуем прямоугольники

let pinkRect = new Rect(750, 250, "pink", 200, 100);
let greenRect = new Rect(710, 280, "#80ffcc", 120, 300);
let yellowRect = new Rect(900, 300, "yellow", 150, 100);
drawArea.add(greenRect, yellowRect, pinkRect);

// Рисуем окружности

let blueSmallCircle = new Circle(220, 180, "#99ccff", 50);
let blueBigCircle = new Circle(250, 250, "#99ccff", 80);
drawArea.add(blueSmallCircle, blueBigCircle);