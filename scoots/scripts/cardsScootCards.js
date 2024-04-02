const urlScooter =  "https://rosybertacchini.github.io/wdd230/chamber/data//scoterInventory.json";
const cards = document.querySelector('#cards');

async function getSootData() {
    const response = await fetch(urlScooter);
    const data = await response.json();
    console.table(data.prophets);
    displayProphets(data.scooters);
}


// const displayscooters = (scooters) => {
//     scooters.forEach((scooter) => {

//         // 1. Create a section element
//         let card = document.createElement('section');
//         // 2. Create an h2 element
//         let title = document.createElement('h3');
//         // 3. Create an img element
//         let portrait = document.createElement('img');
        
//         // datails for mobile
//         let divDetails = document.createElement('div');
//         let divDateBirth = document.createElement('span');
//         let divPlaceBirth = document.createElement('span');

//         // 4. Populate the heading element with the scooter's name
//         scooters.textContent = `${scotter.name} ${prophet.lastname}`;

        
//         // 5. Build the image element
//         portrait.src = `${prophet.imageurl}`;
//         portrait.setAttribute('alt', `${prophet.name} ${prophet.lastname}`);
//         portrait.setAttribute('loading', 'lazy');
//         portrait.setAttribute('width', '300');
//         portrait.setAttribute('height', '400');
//         // prepare Details for Mobile 
//         divDateBirth.innerHTML = "Date of Birth: " + `${prophet.birthdate}`;
//         divPlaceBirth.innerHTML = "Place of Birth: " + `${prophet.birthplace}`;

//         // 6. AppendChild() on the section element named "card"
//         divDetails.appendChild(divDateBirth);
//         divDetails.appendChild(divPlaceBirth);
   
//         card.appendChild(fullName); 
//         card.appendChild(divDetails);        
//         card.appendChild(portrait);
//         cards.appendChild(card);

//         // 7. Add the section card to the "cards" div
//         const cardsContainer = document.getElementById('cards');
//         cardsContainer.appendChild(card);

//     });
// }


getSootData();