const urlScooter =  "https://rosybertacchini.github.io/wdd230/scoots/data//scoterInventory.json";


async function getSootData() {
    const response = await fetch(urlScooter);
    const data = await response.json();
    console.table(data.scooters);
    displayScooterTable(data.scooters);
    displayScooterTableForMobile(data.scooters);
}


function displayScooterTable(scooters) {
    const table = document.getElementById("scooterTable");


    // Clear existing table content
    table.innerHTML = "";

    // Counter to track even/odd rows for alternating colors
    let rowCounter = 0;

    // Iterate through each category of scooters
    scooters.forEach(category => {
        const categoryName = category.category;
        const inventory = category.inventory;


        // Create table headers
        const headers = [`${categoryName}`, "Model", "Max Persons", "Half Day (Reservation)", "Full Day (Reservation)", "Half Day (Walk-in)", "Full Day (Walk-in)"];
        const headerRow = document.createElement("tr");
        headers.forEach(headerText => {
            const th = document.createElement("th");
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        table.appendChild(headerRow);



        // Populate table with scooter information
        inventory.forEach(scooter => {
            const row = document.createElement("tr");
             // Add class based on even/odd row - different colors for rows
            row.classList.add(rowCounter % 2 === 0 ? "even" : "odd");
            for (const key in scooter) {
                if (key !== "imgPath" && key!== "desc") {
                    const cell = document.createElement("td");
                    cell.textContent = scooter[key];
                    row.appendChild(cell);
                }
            }

            // Add image as the first cell
            const imgCell = document.createElement("td");
            const img = document.createElement("img");
            img.src = scooter.imgPath;
            img.alt = scooter.title;
            img.setAttribute('width', '100%');
            img.setAttribute('height', '100%');



            imgCell.appendChild(img);
            row.insertBefore(imgCell, row.firstChild);
            table.appendChild(row);
            rowCounter++;
        });

        const row1 = document.createElement("tr");
        row1.classList.add("rowEmpty");
        table.appendChild(row1);
    });
}

// -----------------------------------------------------------------------------
const displayScooterTableForMobile = (scooters) => {
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
            // ---------------------------------------------------- //

            const card_descriptionDiv = document.createElement('div');
            card_descriptionDiv.setAttribute('id', 'card-descriptionDiv');

            const card_description = document.createElement('p');
            const card_max_persons = document.createElement('p');
            const card_half_day_res = document.createElement('p');
            const card_full_day_res = document.createElement('p');
            const card_half_day_w_in = document.createElement('p');
            const card_full_day_w_in = document.createElement('p');




            
            card_description.setAttribute('class', 'card-description');
            card_max_persons.setAttribute('class', 'card-description');
            card_half_day_res .setAttribute('class', 'card-description');
            card_full_day_res.setAttribute('class', 'card-description');
            card_half_day_w_in.setAttribute('class', 'card-description');
            card_full_day_w_in.setAttribute('class', 'card-description');

            console.log(item)
                console.log(item.max_persons)
            card_description.textContent = item.desc;
            card_max_persons.textContent = item.max-persons;
            card_half_day_res.textContent = item.full_day_res;
            card_full_day_res.textContent = item.full_day_res;
            card_half_day_w_in.textContent = item.half_day_w_in;
            card_full_day_w_in.textContent = item.full_day_w_in;  






            card_descriptionDiv.appendChild(card_description)
            card_descriptionDiv.appendChild(card_max_persons);
            card_descriptionDiv.appendChild(card_half_day_res);
            card_descriptionDiv.appendChild(card_full_day_res);
            card_descriptionDiv.appendChild(card_half_day_w_in);
            card_descriptionDiv.appendChild(card_full_day_w_in);

            card.appendChild(card_descriptionDiv);
       

            card.appendChild(card_title);
            card.appendChild(card_img);
            card.appendChild(card_descriptionDiv);
            cards.appendChild(card);
        });

        section_cards.appendChild(cards);
    });
}





getSootData();

