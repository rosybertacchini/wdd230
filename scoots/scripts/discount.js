document.getElementById("reserveNow").addEventListener("click", function () {
    discount();
  });



function discount() {
    window.location.href = "reservations.html?discount=yes";
    
  }  