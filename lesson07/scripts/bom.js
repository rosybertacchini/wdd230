const input = document.querySelector("#favchap");
const button = document.querySelector("#myButton");
const list = document.querySelector("#list")


let chaptersArray = getChapterList() || [];


chaptersArray.forEach(chapter => {
    displayList(chapter);
});


button.addEventListener('click', () => {
    if (input.value != '') {
        let li = document.createElement("li");
        let deleteButton = document.createElement('button');
        li.textContent = input.value;

        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
    else {
        alert("Please insert a chapter !")
    }
});



function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item;
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapterFromLocalStorage(li.textContent);
        input.focus();
    });

}


function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapterFromLocalStorage(chapter) {

    chapter = chapter.slice(0, chapter.length - 1); 
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}







// ó se puede declarar como una funcion arrow
// button.addEventListener("click", () => {  });



