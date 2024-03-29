const currentTemp = document.querySelector('#current-temp');
const icon = document.querySelector('#icon');
const weather = document.querySelector('#weather');
const weatherIcon = document.createElement('img');
const weatherDivForcast = document.createElement('div');
const textForcast = document.createElement('div');
const captionDesc = document.querySelector('figcaption');
const figure = document.querySelector('figure');

const url = "https://api.openweathermap.org/data/2.5/forecast?lat=32.50&lon=-117.00&appid=bf0dd84c28e62391c7294fb52233ed70&units=metric";

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

// **************************** JSON  ***************************************
const displayResults = (data)  => {
    weatherDivForcast.innerHTML = "";
    textForcast.innerHTML = "3 DAY FORCAST: ";
    weather.appendChild(textForcast);
    
    
    const todayTxt = new Date().toLocaleDateString();

    let dateDisplayed1 = false;
    let dateDisplayed2 = false;
    let dateDisplayed3 = false;
    
    data.list.forEach(forecast => {

        let today = new Date();

        let date = "";
         date  = forecast.dt_txt;
        const temperature = forecast.main.temp;
        const weatherDescription = forecast.weather[0].description;
        const dtTxt = forecast.dt_txt.toString();

        const iconsrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}`;

        currentTemp.innerHTML = `${Math.round(temperature)}&deg;C`;  // caracter especial para grados
        weatherIcon.setAttribute('src', iconsrc+ ".png");
        weatherIcon.setAttribute('alt',"Weather Icon");
        figure.appendChild( weatherIcon);
        captionDesc.textContent = capitalizeEachWord(`${forecast.weather[0].description}`);


        let objDate= new Date(date.substring(0,10));

        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        const dayAftertomorrow = new Date(today);
        dayAftertomorrow.setDate(today.getDate() + 2);

                if ( (today.toLocaleDateString("en-US") === objDate.toLocaleDateString("en-US")) & !dateDisplayed1  ){
                        weatherDivForcast.innerHTML =   weatherDivForcast.innerHTML + date.substring(0,10) + " " + `${temperature}&deg;C` + " " +  `${weatherDescription} | `;
                        weatherDivForcast.style.color = "white";
                        weather.appendChild(weatherDivForcast);
                         dateDisplayed1 = true;
                        console.log(forecast);
                }
               
                if ( (tomorrow.toLocaleDateString("en-US") === objDate.toLocaleDateString("en-US"))  & !dateDisplayed2  ){
                        weatherDivForcast.innerHTML =   weatherDivForcast.innerHTML + date.substring(0,10) + " " + `${temperature}&deg;C` + " " +  `${weatherDescription} | `;
                        weatherDivForcast.style.color = "white";
                        weather.appendChild(weatherDivForcast);
                         dateDisplayed2 = true;
                        console.log(forecast);
                }
                
                if (  (dayAftertomorrow.toLocaleDateString("en-US") === objDate.toLocaleDateString("en-US"))  & !dateDisplayed3 ){
                        weatherDivForcast.innerHTML =   weatherDivForcast.innerHTML + date.substring(0,10) + " " + `${temperature}&deg;C` + " " +  `${weatherDescription} | `;
                        weatherDivForcast.style.color = "white";
                        weather.appendChild(weatherDivForcast);
                         dateDisplayed3 = true;
                        console.log(forecast);
                }
               
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


