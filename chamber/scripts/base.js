// Chamber of Commerce screen


/* screen */
var w = window.innerWidth;
var h = window.innerHeight;



/* Menu for mobile devices */
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

function adjustTextWidth(){
    const htmlEl = document.getElementById('full-width');
    htmlEl.style.fontSize = "25%";
    htmlEl.style.fontSize = (window.innerWidth / htmlEl.offsetWidth) * parseInt(htmlEl.style.fontSize.slice(0,-1)) * 1.4 + "%";
    console.log(window.innerWidth, htmlEl.offsetWidth, htmlEl.style.fontSize);
}
adjustTextWidth();
window.addEventListener('resize', adjustTextWidth);



// const getWeatherInfo = async () => {
// 	const response = await fetch(	  
// 	  "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=bf0dd84c28e62391c7294fb52233ed70"
// 	).then((response) => response.json());
// 	console.log(response);
  
// 	// // cearte an array
// 	// weatherInfo = response.record.coords;
// 	// console.log(weatherInfo);
//   };



  // *********************************************************** //
//  getWeatherInfo(); 
