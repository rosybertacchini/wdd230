const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("range");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}



/* *************** VALIDETE EMAIL ******************* */

function validateEmail() {
    var emailInput = document.getElementById('email');
    var emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;

    if (!emailPattern.test(emailInput.value)) {
        console.log(rango.innerText)
        alert('Please enter a valid BYU-Idaho email address.');
    }
}

