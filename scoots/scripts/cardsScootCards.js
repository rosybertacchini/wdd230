const urlScooter =  "https://rosybertacchini.github.io/wdd230/scoots/data//scoterInventory.json";


async function getSootData() {
    const response = await fetch(urlScooter);
    const data = await response.json();
    console.table(data.scooters);
    displayCards(data.scooters);
}

const displayCards = (scooters) => {
    const section_cards = document.querySelector('#section-cards');

    scooters.forEach((scooter, index) => {
        const category = document.createElement('h2');
        category.innerHTML = `${scooter.category}`;
        category.setAttribute('id' , 'category')
        section_cards.appendChild(category); 

        const cards = document.createElement('div');
        cards.setAttribute('class', 'cards');

        scooter.inventory.forEach((item) => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const card_content = document.createElement('div');
            card_content.setAttribute('class', 'card-content');

            const card_title = document.createElement('h2');
            card_title.setAttribute('class', 'card-title');
            card_title.textContent = item.title;

            const card_img = document.createElement('img');
            card_img.setAttribute('class', 'card-img');
            card_img.src = item.imgPath;
            card_img.alt = item.title;

            const card_description = document.createElement('p');
            card_description.setAttribute('class', 'card-description');
            card_description.textContent = item.desc;

            card.appendChild(card_title);
            card.appendChild(card_img);
            card.appendChild(card_description);

            cards.appendChild(card);
        });

        section_cards.appendChild(cards);
    });
}


getSootData();

