const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75706948269879&lon=6.6465430447681575&appid=bf0dd84c28e62391c7294fb52233ed70&units=imperial";

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
        currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;  // caracter especial para grados
        const iconsrc = `https://openweathermap.org/img/w/${w.icon}`;
        weatherIcon.setAttribute('src', iconsrc+ ".png");
        weatherIcon.setAttribute('alt',"Weather Icon");
        captionDesc.textContent = capitalizeEachWord(`${w.description}`);
    });

}

function capitalizeEachWord(str) {
    // Split the string into an array of words, capitalize each word, and join them back
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  
apiFetch()