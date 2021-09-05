let clock = document.querySelector('#clock');

// Updating showTime function every second
setInterval(showTime, 1000)
// Using Date() to get the time
function showTime() {
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	let am_pm = "AM";

	// Logic for AM and PM
	if(hour == 0 ) {
		hour = "12";
		am_pm = "AM";
	}

	if(hour < 12) {
		am_pm = "AM";
	}

	if(hour == 12) {
		am_pm = "PM";
	}

	if(hour > 12) {
		am_pm = "PM";
	}

	// Using Ternary Operator to concat. 0 to single digits of clock
	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	// Displaying Time
	let currentTime = `${hour}:${min}:${sec} ${am_pm}`;
	// let currentTime = `${hour}:${min}:${sec}`;
	clock.innerText = currentTime;
}