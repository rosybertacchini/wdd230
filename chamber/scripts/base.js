// Chamber of Commerce screen


/* screen */
var w = window.innerWidth;
var h = window.innerHeight;



/* Menu for mobile devices */
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');


hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


const modeButton = document.querySelector("#mode");
const main = document.querySelector("#main");


modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
    	main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";

	} else {
		main.style.background = "#fff";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});


