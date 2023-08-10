// Navbar color change

const navBar = document.querySelector(".navbar");
const sectionOne = document.querySelector(".landing-page");

const sectionOneOptions = {
	rootMargin: " -200px 0px 0px 0px",
};

const sectionOneObserver = new IntersectionObserver(function (
	entries,
	sectionOneObserver,
) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			navBar.classList.add("nav-scrolled");
		} else {
			navBar.classList.remove("nav-scrolled");
		}
	});
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

updateYear = () => {
	let year = new Date().getFullYear();

	document.getElementById("currentYear").innerHTML = year;
};

updateYear();
