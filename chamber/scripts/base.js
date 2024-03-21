// // Chamber of Commerce screen


// /* screen */
// var w = window.innerWidth;
// var h = window.innerHeight;



// /* Menu for mobile devices */
// const hamButton = document.querySelector('#menu');
// const navigation = document.querySelector('.navigation');


// hamButton.addEventListener('click', () => {
// 	navigation.classList.toggle('open');
// 	hamButton.classList.toggle('open');
// });


// const modeButton = document.querySelector("#mode");
// const main = document.querySelector("#main");


// modeButton.addEventListener("click", () => {
// 	if (modeButton.textContent.includes("🕶️")) {
//     	main.style.background = "#000";
// 		main.style.color = "#fff";
// 		modeButton.textContent = "🔆";

// 	} else {
// 		main.style.background = "#fff";
// 		main.style.color = "#000";
// 		modeButton.textContent = "🕶️";
// 	}
// });


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

// Function to mark active page in the navigation menu
function markActivePage() {
    const currentPage = window.location.pathname.split('/').pop();
    const links = document.querySelectorAll('.navigation ul li a');

    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Call the function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', markActivePage);
