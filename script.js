setInterval(() => {
	const end = Date.parse('Jan 15, 2022 23:59:59');
	const today = Date.parse(new Date());

	const diff = end - today;

	const days = Math.floor(diff / (1000 * 60 * 60 * 24));
	const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
	const mins = Math.floor(diff / 1000 / 60) % 60;
	const secs = Math.floor(diff / 1000) % 60;

	document.querySelector('.days').innerText = days;
	document.querySelector('.hours').innerText = hours;
	document.querySelector('.minutes').innerText = mins;
	document.querySelector('.seconds').innerText = secs;
   if(diff==0) clearInterval();
}, 1000);
