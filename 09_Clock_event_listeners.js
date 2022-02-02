// Поместим таймер на страницу

let currentTime = document.createElement("h2");

let startBtn = document.createElement("button");
let stopBtn = document.createElement("button");
startBtn.innerHTML = "Start";
stopBtn.innerHTML = "Stop";

document.body.prepend(stopBtn);
document.body.prepend(startBtn);

function updateTimer() {
	let date = new Date();
	let hours = (date.getHours() < 10) ? `0${date.getHours()}` : date.getHours();
	let minutes = (date.getMinutes() < 10) ? `0${date.getMinutes()}` : date.getMinutes();
	let seconds = (date.getSeconds() < 10) ? `0${date.getSeconds()}` : date.getSeconds();

	currentTime.innerHTML = `Время: ${hours}:${minutes}:${seconds}`;
	document.body.prepend(currentTime);
}

updateTimer();
let timerID = setInterval(updateTimer, 1000);

// Навешиваем обработчики событий

startBtn.addEventListener("click", () => {
	if(timerID) return;
	timerID = setInterval(updateTimer, 1000);
});

stopBtn.addEventListener("click", () => {
	clearInterval(timerID, 1000);
	timerID = null;
});