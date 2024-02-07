
const input  = document.querySelector("#favchap");
const button = document.querySelector("#myButton");
const list = document.querySelector("#list")

button.addEventListener("click", function () {
    if (input.value != '')  {
            let li = document.createElement("li");
            let deleteButton = document.createElement("button");
            // li.textContent = input.value;


            /*  ***************************************************************** */
            let inputButton = document.createElement("button");
            inputButton.style.color = "white";
            inputButton.style.width = '50%';
            inputButton.style.backgroundColor = 'gray';
            inputButton.textContent = input.value;
            li.append(inputButton);


            let readButton = document.createElement("button");
            readButton.textContent = " Read chapter ";
            readButton.style.color = "white";
            readButton.style.width = '35%';
            readButton.addEventListener("click", function () {
                window.open("", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
                input.focus();
            });
            
            readButton.style.backgroundColor = 'gray';
           
            li.append(readButton);

            deleteButton.style.color = "red";
            deleteButton.textContent = " X ";
            deleteButton.style.width = '15%';
            deleteButton.style.backgroundColor = 'darksalmon';
            deleteButton.style.color = 'white';

            deleteButton = deleteButton;

            /*  **************************************************************** */


            li.append(deleteButton);
            list.append(li);
            deleteButton.addEventListener("click", function () {
                list.removeChild(li);
                input.focus();
            });
    input.focus();
    input.value = "";
    
    }
 });


// ó se puede declarar como una funcion arrow
// button.addEventListener("click", () => {  });



