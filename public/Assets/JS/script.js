var options = {
	strings: [
		"an iOS developer",
		"an Intern @TinkerHub Foundation",
		"a Student Developer",
		"a Community Evangelist",
		"a Team Player",
	],
	typeSpeed: 40,
	backSpeed: 40,
	backDelay: 1000,
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