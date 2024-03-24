// get element to display the message
const message = document.querySelector("#message");


// Function to get the current date in a formatted string
function getCurrentDate() {
  const today = new Date();
  return today.toISOString().split("T")[0]; // Format: YYYY-MM-DD
}

// Function to display the welcome message or the last visit message
function displayMessage() {
  const lastVisitDate = localStorage.getItem("lastVisitDate");

  if (!lastVisitDate) {
    // First visit
    const currentDate = getCurrentDate();
    localStorage.setItem("lastVisitDate", currentDate);
    console.log(`Welcome! Let us know if you have any questions.`);
    message.innerHTML = "Welcome! Let us know if you have any questions.";
  } else {
    // Returning same day
    const currentDate = getCurrentDate();
    if (currentDate == lastVisitDate) {
      console.log("Back so soon! Awesome!");
      message.innerHTML = "Back so soon! Awesome!";
    } else {
      // Returning visit
      const currentDate = getCurrentDate();
      const daysSinceLastVisit = Math.floor(
        (new Date(currentDate) - new Date(lastVisitDate)) /
          (1000 * 60 * 60 * 24)
      );
      console.log(`You last visited ${daysSinceLastVisit} days ago.`);
      message.innerHTML = `You last visited ${daysSinceLastVisit} days ago.`;
      // Update last visit date to today
      localStorage.setItem("lastVisitDate", currentDate);
    }
  }
}

// Call the function
displayMessage();
