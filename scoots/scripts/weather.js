const weatherIcon = document.querySelector("#weatherIcon");
const compnay = document.querySelector("#company");
const showMaxtemp = document.querySelector('#current--maxTemp');
const url = "https://api.openweathermap.org/data/2.5/weather?lat=32.50310852801206&lon=-117.00470232465491&appid=bf0dd84c28e62391c7294fb52233ed70&units=metric";
//const url = "https://api.openweathermap.org/data/2.5/forecast?lat=32.50&lon=-117.00&appid=bf0dd84c28e62391c7294fb52233ed70&units=metric";

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
    data.weather.forEach(w => {   // can be more then one event
         
        const iconsrc = `https://openweathermap.org/img/w/${w.icon}`;
        showMaxtemp.innerHTML= `Today's max temp: ${Math.round(data.main.temp_max)}&deg;C`;  // caracter especial para grados
        weatherIcon.setAttribute('src', iconsrc+ ".png");
        company.appendChild( weatherIcon);

        const feels_like = `${Math.round(data.main.feels_like)}&deg;C`; 
        const humidity =  `${Math.round(data.main.humidity)}%`; 
        const pressure =  `${Math.round(data.main.pressure)} hPa`; 
        const temp = `${Math.round(data.main.temp)}&deg;C`; 
        const temp_min = `${Math.round(data.main.temp_min)}&deg;C`; 
        const temp_max = `${Math.round(data.main.temp_max)}&deg;C`; 

        const desc = capitalizeEachWord(`${data.weather[0].description}`);
        // create weather CARD
        createWeatherCard(feels_like,  humidity, pressure, temp, temp_min, temp_max ,iconsrc,desc)
    });

}

function capitalizeEachWord(str) {
    // Split the string into an array of words, capitalize each word, and join them back
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

function createWeatherCard(feels_like,  humidity, pressure, temp, temp_min, temp_max,iconsrc ,desc) {
    const card = document.createElement('section');
    const card_title = document.createElement('h4');
    const card_img = document.createElement('img');
    const card_description = document.createElement('p');
    const card_temp = document.createElement('p');
    const figure = document.createElement('figure');
    const figDesc = document.createElement('figcaption');

    const cards = document.querySelector('#left-cards');

    card_title.innerHTML = "Today's Weather";
    card_img.setAttribute('src', iconsrc+ ".png") + " "; 
    card_img.setAttribute('alt', "whather Icon") + " ";
    card_description.innerHTML = "Feels like " + feels_like + " ";
    card_description.innerHTML +="Humidity is " + humidity + " ";
    card_description.innerHTML +="and the Pressure is " + pressure;


    card_temp.innerHTML  = "Current temperature " + temp + " ";
    card_temp.innerHTML += "( Min " + temp_min + " Max " + temp_max + ")"; 

    figDesc.textContent = desc;
    figure.appendChild(card_img);
    figure.appendChild(figDesc);

    figure.appendChild(card_img);
    card.appendChild(card_title); 
    card.appendChild(figure);        
    card.appendChild(card_description);
    card.appendChild(card_temp);
    cards.appendChild(card);

    // 7. Add the section card to the "cards" div
    const cardsContainer = document.getElementById('left-cards');
    cardsContainer.appendChild(card);
}



  
  





apiFetch()





