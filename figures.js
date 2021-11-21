function Figure(x, y, color) {
	this.x = x;
	this.y = y;
	this.color = color;

	this.draw = function() {
		console.log("Сейчас будем рисовать!");
	};
}

function Rect(x, y, color, width, height) {
	Figure.call(this, x, y, color);

	console.log(x);
	console.log(color);

	this.width = width;
	this.height = height;

	this.draw = function(ctx) {
		
		ctx.fillStyle = this.color;
		console.log(ctx.fillStyle);
		ctx.fillRect(this.x, this.y, this.width, this.height);
	};
}

function Canvas(id) {
	let canvas = document.getElementById(id);
	let ctx = canvas.getContext("2d");

	Rect.call(this);
	
	this.add = function() {
		return this.draw(ctx);
	};
}

let drawArea = new Canvas("canvasID");
let rect = new Rect(10, 10, "green", 100, 100);
console.log(rect);
drawArea.add(rect);



// function Line(x, y, x1, y1, color) {
// 	Figure.call(this, x, y, color);

// 	this.x1 = x1;
// 	this.y1 = y1;
// }

// function Circle(x, y, color, radius) {
// 	Figure.call(this, x, y, color);

// 	this.radius = radius;
// }

