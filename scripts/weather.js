const currentTemp = document.querySelector('#current-temp');
//const weatherIcon = document.querySelector('#weather-icon');
const weatherIcon = document.createElement('img');
const figure = document.querySelector('figure');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=32.50310852801206&lon=-117.00470232465491&appid=bf0dd84c28e62391c7294fb52233ed70&units=metric";


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.table(data); 
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

const displayResults = (data)  => {

    data.weather.forEach(w => {   // can be more then one eather event
        currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;C`;  // caracter especial para grados
        const iconsrc = `https://openweathermap.org/img/w/${w.icon}`;
        
        calculateWindChill(`${data.main.temp}`, `${data.wind.speed}`);
        weatherIcon.setAttribute('src', iconsrc+ ".png");
        weatherIcon.setAttribute('alt',"Weather Icon");
        figure.appendChild( weatherIcon);
        captionDesc.textContent = capitalizeEachWord(`${w.description}`);
    });

}

function capitalizeEachWord(str) {
    // Split the string into an array of words, capitalize each word, and join them back
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  
apiFetch()



 // **************************** calculate WIND CHILL  *************************************** 

function calculateWindChill(temperature, windSpeed){

    const result =  document.getElementById('result');
    var windChill = "";
    result.innerHTML = " ";

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





