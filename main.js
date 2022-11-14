let button = document.getElementById("button-input");
let originalInputField = document.getElementById("fname");
let removeAllButton = document.getElementById("remove-all");

let ul1 = document.getElementById("to-do-list");
let ul2 = document.getElementById("done-list");

var listItems = "";
var doneButton = "";

let mainErrorMessage = document.createElement("p");
mainErrorMessage.innerHTML = "Du får inte skapa tomma sysslor";
mainErrorMessage.style.color = "red";

let sideErrorMessage = document.createElement("p");
sideErrorMessage.innerHTML = "Kan ej spara tomma sysslor";
sideErrorMessage.style.color = "red";

removeAllButton.addEventListener("click", function(){
    let i = 0;
    let allListItems = document.getElementsByClassName("list-item");
    while(i < allListItems.length){
        allListItems[i].remove()
    }
})

button.addEventListener("click", function(e){
    e.preventDefault();

    if(originalInputField.value != ""){
        mainErrorMessage.remove();

        /* Create and append new list items*/

        listItems = document.createElement("li");
        listItems.className = "list-item-new";
        ul1.appendChild(listItems);

        /* Create new input field */

        var newInputField = document.createElement("input");
        newInputField.value = originalInputField.value;
        newInputField.disabled = true;
        
        /* Create the change button and add eventListener to it */
        var changeButton = document.createElement("button");
        changeButton.innerHTML = "Ändra";

        changeButton.addEventListener("click", function(e) {
            e.preventDefault();

            var x = e.target;
            if(x.parentNode.firstChild.disabled == true){
                x.parentNode.firstChild.disabled = false;
            } else if(newInputField.value == ""){
                x.parentNode.appendChild(sideErrorMessage)
                x.parentNode.firstChild.disabled = false;
            } else if(newInputField.value != ""){
                sideErrorMessage.remove();
                x.parentNode.firstChild.disabled = true;
            }
        })

        /* Create done button and add Eventlistener to it */
        doneButton = document.createElement("button");
        doneButton.innerHTML = "Färdig";
        doneButton.className = "done-button";

        doneButton.addEventListener("click", function(e) {
            e.preventDefault();

            var x = e.target;
            ul2.appendChild(x.parentNode);
            x.parentNode.children[2].remove();
        })

        /* Create delete button and add eventlistener to it */
        var deleteButton =document.createElement("button")
        deleteButton.innerHTML = "Radera";

        deleteButton.addEventListener("click", function(e) {
            e.preventDefault();

            var x = e.target;
            x.parentNode.remove();
        })

        /* append all the new elements to the new list item */
        listItems.appendChild(newInputField);
        listItems.appendChild(changeButton);
        listItems.appendChild(doneButton);
        listItems.appendChild(deleteButton);
        } 
        /* in case input is empty */ 
        else {
            if(mainErrorMessage.innerHTML != ""){
            let form = document.getElementById("form");
            form.appendChild(mainErrorMessage);
            }
        }
})