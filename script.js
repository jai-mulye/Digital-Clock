const clock = document.querySelector('#clock');
const d_day = document.querySelector('#d_day');
const days = document.getElementsByClassName('days');
const d_time = document.querySelector('#d_time');
const d_am_pm = document.querySelector('#d_am_pm');
const d_date = document.querySelector('#d_date');

setInterval(showTime, 1000)

function showTime() {
	let time = new Date();
	let day = time.getDay();

	// Logic for Day
	for(let d of days) {
		if(d.title == day)
			d.classList.add('dayHighlight','neonText');
	}

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
		hour = hour - 12;
		am_pm = "PM";
	}

// Using Ternary Operator to concat. 0 to single digits of clock
hour = hour < 10 ? "0" + hour : hour;
min = min < 10 ? "0" + min : min;
sec = sec < 10 ? "0" + sec : sec;


d_time.classList.add('neonText');
d_time.innerText = `${hour}:${min}:${sec}`;
d_am_pm.classList.add('neonText');
d_am_pm.innerText = `${am_pm}`;

let date = time.getDate();
let month = time.getMonth();
let year = time.getFullYear();
d_date.classList.add('neonText');

date = date < 10 ? "0" + date : date;
month = month < 10 ? "0" + month : month;

d_date.innerText = `${date}-${month}-${year}`;
} 