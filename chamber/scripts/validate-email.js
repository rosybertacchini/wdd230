/* *************** VALIDETE EMAIL ******************* */

function validateEmail() {
    var emailInput = document.getElementById('email');
    var emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (!emailPattern.test(emailInput.value)) {
        alert('Please enter a valid email address.');
    }
}

