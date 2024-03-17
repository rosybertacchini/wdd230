

const displayResults = (data)  => {

    data.weather.forEach(w => {   // can be more then one eather event
        currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;C`;  // caracter especial para grados
        calculateWindChill(`${data.main.temp}`, `${data.wind.speed}`);
        const iconsrc = `https://openweathermap.org/img/w/${w.icon}`;
        const img = document.createElement('img');

        img.setAttribute('src', iconsrc + ".png");
        img.setAttribute('alt',"Weather Icon");

        icon.appendChild(img);


        captionDesc.textContent = capitalizeEachWord(`${w.description}`) ;
    });

}

function capitalizeEachWord(str) {
    // Split the string into an array of words, capitalize each word, and join them back
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  
 // **************************** calculate WIND CHILL  *************************************** 

function calculateWindChill(temperature, windSpeed){

    const result =  document.getElementById('result');
    var windChill = "";

    if( temperature <= 10  ||  windChill >= 4.82) {
        var windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        result.innerText = "Wind Chill Factor: " + windChill.toFixed(2) + "°C";
    } else {
        result.innerText = "There is no conditions to have wind chill";
        result.style.color = "red";
    }
}       
// **************************** calculate WIND CHILL END  ***************************************





apiFetch()