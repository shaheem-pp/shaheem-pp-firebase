var options = {
	strings: [
		"Python Developer",
		"Community Evangelist",
	],
	typeSpeed: 50,
	backSpeed: 25,
	backDelay: 1500,
	loop: true,
	showCursor: true,
	cursorChar: '|',
};

var typed = new Typed('#typed', options, {
	stringsElement: '#typed-strings'
});

function reveal() {
	var reveals = document.querySelectorAll(".reveal");
	for (var i = 0; i < reveals.length; i++) {
		var windowHeight = window.innerHeight;
		var elementTop = reveals[i].getBoundingClientRect().top;
		var elementVisible = 10;
		if (elementTop < windowHeight - elementVisible) {
			reveals[i].classList.add("active");
		} else {
			reveals[i].classList.remove("active");
		}
	}
}

window.addEventListener("scroll", reveal);
reveal();