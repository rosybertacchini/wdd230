
function calculateWindChillFactor(temperature, windSpeed) {
    // Formula for wind chill factor
    var windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    return windChill;
}


function calculateWindChill() {
    // Get values from form
    const temperature = parseFloat(document.getElementById('temperature').value);
    const windSpeed = parseFloat(document.getElementById('windSpeed').value);

    // Check if inputs are valid numbers
    if (isNaN(temperature) || isNaN(windSpeed)) {
        // alert("Please enter valid numbers for temperature and wind speed.");
        alert("please");
        return;
    }

    // check values of temperature and winSpeed
    if( temperature <= 10  ||  windChill <= 4.82) {

        // Calculate wind chill factor
        var windChill = calculateWindChillFactor(temperature, windSpeed);

        // Display the result
        document.getElementById('result').innerText = "Wind Chill Factor: " + windChill.toFixed(2) + " °C";
        document.getElementById('result').style.color = "red";
        
    }
    else {
        alert("Please veryfy tempreture is >= 10 celcius and wind chill is >= 4.82 kilometer per hour")
    }
}


