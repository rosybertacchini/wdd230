const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/forecast?lat=32.50&lon=-117.00&appid=bf0dd84c28e62391c7294fb52233ed70&units=imperial";
//.5/weather?lat=32.50&lon=-117.00&appid=bf0dd84c28e62391c7294fb52233ed70&units=imperial"; // city of tijuana
//const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75706948269879&lon=6.6465430447681575&appid=bf0dd84c28e62391c7294fb52233ed70&units=imperial";



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
 
    const todayTxt = new Date().toLocaleDateString();
      
    let dateDisplayed = false;
    let dayNo = 1;
    data.list.forEach(forecast => {
     
       let today = new Date();

        let date = "";
         date  = forecast.dt_txt;
        const temperature = forecast.main.temp;
        const weatherDescription = forecast.weather[0].description;
        // const todayDay = today.getDate().toString(); // esta primero
        const dtTxt = forecast.dt_txt.toString();

        const iconsrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}`;
        
        currentTemp.innerHTML = `${Math.round(temperature)}&deg;F`;  // caracter especial para grados
        weatherIcon.setAttribute('src', iconsrc+ ".png");
        weatherIcon.setAttribute('alt',"Weather Icon");
        captionDesc.textContent = capitalizeEachWord(`${forecast.weather[0].description}`);


 let objDate= new Date(date.substring(0,10));

 const tomorrow = new Date(today);
          tomorrow.setDate(today.getDate() + 1);
    const dayAftertomorrow = new Date(today);
          dayAftertomorrow.setDate(today.getDate() + 2);


 
 //alert(dayAftertomorrow.toLocaleDateString("en-US") + "=> "  +  objDate.toLocaleDateString("en-US"));
 if (  (
            (today.toLocaleDateString("en-US") === objDate.toLocaleDateString("en-US")) ||
            (tomorrow.toLocaleDateString("en-US") === objDate.toLocaleDateString("en-US")) ||
            (dayAftertomorrow.toLocaleDateString("en-US") === objDate.toLocaleDateString("en-US")) 
        )
        & !dateDisplayed  & dayNo <=3
      ){

                const olList = document.getElementById('olList');
                li = document.createElement('li');
                li.innerHTML = "Date: " +  date + " Temp: " + temperature + " Desc: " +  weatherDescription;
                olList.appendChild(li);
                dateDisplayed = true;
                //alert(dateDisplayed.toString());
                dayNo = dayNo + 1;
                // console.log(dayNo.toString());
                console.log(forecast);
             
                
        } 
      
    });
}



function capitalizeEachWord(str) {
    // Split the string into an array of words, capitalize each word, and join them back
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

apiFetch()


