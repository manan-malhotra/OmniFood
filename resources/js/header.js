btn = document.body.querySelector('button');
head = document.body.querySelector('.herocontainer');
btn.addEventListener('click', function() {
	// head.style.backgroundColor = 'red';
	head.classList.toggle('h1onclick');
});
