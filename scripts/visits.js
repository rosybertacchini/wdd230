
// get element to display the message
const visits = document.querySelector("#visits");

// get number of visits and increment 1
function displayNoVisits() {
  let numVisits = localStorage.getItem("numVisits");

  if (!numVisits) {
    // If numVisits is not present in localStorage, set it to 1
    numVisits = 1;
  } else {
    // Increment the existing numVisits
    numVisits = parseInt(numVisits) + 1;
  }

  // Update last visit date to today
  localStorage.setItem("numVisits", numVisits);
  visits.innerHTML = `Number of visits is: ${parseInt(numVisits)}.`;
}

// Call the function
displayNoVisits();
