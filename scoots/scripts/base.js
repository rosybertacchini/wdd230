var w = window.innerWidth;
var h = window.innerHeight;

/* Menu for mobile devices */
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");


hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

// Function to mark active page in the navigation menu
function markActivePage() {
  const currentPage = window.location.pathname.split("/").pop();
  const links = document.querySelectorAll(".navigation ul li a");

// the discount botton do not apear in pages of reservations.html and contact Us  ----------- 
// ------------------------------------------------------------------------------------------
// Get the discount parameter from the URL
var discountParam = getUrlParameter('discount');

// Display the discount parameter
if (discountParam === 'yes') {
  const msgdiscount = document.getElementById("msgdiscount");
  msgdiscount.innerHTML = "You Have 15 % off ";
  msgdiscount.style.color - "blue";
  msgdiscount.style.fontSize = "16";
  // You can do whatever you want with the discount parameter here
} 
// else {
//   const msgdiscount = document.getElementById("msgdiscount");
//   msgdiscount.innerHTML = " ";
// }
// -------------------------------------------------------------------------------------------

  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// -----------------------------------------------------------------------------------
// Function to parse URL parameters
function getUrlParameter(name) {
  name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
// -----------------------------------------------------------------------------------

// Call the function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", markActivePage);