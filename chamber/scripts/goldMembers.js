 

const linksURL  = "https://rosybertacchini.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayMembers(data.members);
  }

const ul = document.querySelector('#goldMembersList');


const displayMembers = (members) => {
    goldMembers = [];
    members.forEach((member) => {
        const memberLevel = `${member.membershipLevel}`
        if (memberLevel === 'Gold') {
                //add company to an array of gold members
                goldMembers.push(`${member.name}`);
        }
    });

    goldMembers.forEach((m) => {
        const li = document.createElement('li');
        li.innerHTML = m;
        ul.appendChild(li);
    });  
    
//    const lastItem = goldMembers - 1; // Get the last item of the array
//    Math.floor(Math.random() * sizeof(goldMembers));


   

};




getMembers();