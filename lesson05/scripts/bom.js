
const input  = document.querySelector("#favchap");
const button = document.querySelector("#myButton");
const list = document.querySelector("#list")

button.addEventListener("click", function () {
    if (input.value != '')  {
            let li = document.createElement("li");

        
            let deleteButton = document.createElement("button");

            li.textContent = input.value;
            /*  **************** */
            deleteButton.style.color = "red";
            deleteButton.textContent = " X ";
            deleteButton.style.width = '10%';

            deleteButton = deleteButton;

            /*  **************** */


            li.append(deleteButton);
            list.append(li);
            deleteButton.addEventListener("click", function () {
                list.removeChild(li);
                input.focus();
                lis();
        });
    input.focus();
    input.value = "";
    
    }
 });


// ó se puede declarar como una funcion arrow
// button.addEventListener("click", () => {  });



