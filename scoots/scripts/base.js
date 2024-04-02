var w = window.innerWidth;
var h = window.innerHeight;

/* Menu for mobile devices */
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
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

document.getElementById("reserveNow").addEventListener("click", function() {
    discount();
});

function discount(){

    alert("go to reservations");
}

// Call the function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', markActivePage);