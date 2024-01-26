    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });












/* Declare and initialize global variables */
const weather = document.querySelector("#weather");

/* async getCoordinates Function using fetch()*/
const getWeather = async () => {
    const response = await fetch(
        "https://pro.openweathermap.org/data/2.5/forecast/hourly?q=München,DE&appid={bf0dd84c28e62391c7294fb52233ed70}"
    ).then((response) => response.json());


    console.log("Coordinates");
  };




  