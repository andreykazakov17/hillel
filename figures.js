function Figure(x, y, color) {
	this.x = x;
	this.y = y;
	this.color = color;

	this.draw = function() {
		console.log();
	};
}

function Line(x, y, x1, y1, color) {
	Figure.call(this, x, y, color);

	this.x1 = x1;
	this.y1 = y1;

	this.draw = function(ctx) {
		ctx.beginPath();
		ctx.strokeStyle = this.color;
		ctx.moveTo(this.x, this.y);
		ctx.lineTo(this.x1, this.y1);
		ctx.stroke();
		ctx.closePath();
	};
}

function Rect(x, y, color, width, height) {
	Figure.call(this, x, y, color);

	this.width = width;
	this.height = height;

	this.draw = function(ctx) {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	};
}

function Circle(x, y, color, radius) {
	Figure.call(this, x, y, color);

	this.radius = radius;

	this.startAngle = 0;
	this.radians = (Math.PI/180)*360;

	this.draw = function(ctx) {
		ctx.beginPath();
		//ctx.strokeStyle = this.color;
		ctx.fillStyle = this.color;
		ctx.arc(this.x, this.y, this.radius, this.startAngle, this.radians);
		ctx.fill();
		ctx.closePath();
	};
}


function Canvas(id) {
	let canvas = document.getElementById(id);
	let ctx = canvas.getContext("2d");
	ctx.globalAlpha = 0.5;

	Line.call(this);
	Rect.call(this);
	Circle.call(this);
	
	this.add = function(figure) {
		if(figure instanceof Rect) {
			return figure.draw(ctx);
		} else if(figure instanceof Line) {
			return figure.draw(ctx);
		} else if (figure instanceof Circle) {
			return figure.draw(ctx);
		}
	};
}

let drawArea = new Canvas("canvasID");

// Рисуем линии

let topLine = new Line(100, 600, 400, 470, "grey");
drawArea.add(topLine);
let bottomLine = new Line(120, 620, 420, 490, "grey");
drawArea.add(bottomLine);

// зигзаг


let firstLine = new Line(0, 0, 20, 20, "grey");
let secondLine = new Line(20, 20, 40, 0, "grey");
//let thirdLine = new Line(40, 0, 60, 20, "grey");
drawArea.add(firstLine);
drawArea.add(secondLine);

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
drawArea.add(pinkRect);
let greenRect = new Rect(710, 280, "#80ffcc", 120, 300);
drawArea.add(greenRect);
let yellowRect = new Rect(900, 300, "yellow", 150, 100);
drawArea.add(yellowRect);

// Рисуем окружности

let blueSmallCircle = new Circle(220, 180, "#99ccff", 50);
let blueBigCircle = new Circle(250, 250, "#99ccff", 80);
drawArea.add(blueSmallCircle);
drawArea.add(blueBigCircle);