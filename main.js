let button = document.getElementById("button-input");
let originalInputField = document.getElementById("fname");
let removeAllButton = document.getElementById("remove-all");

let ul1 = document.getElementById("to-do-list");
let ul2 = document.getElementById("done-list");

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
        allListItems[i].remove();
    }
})

button.addEventListener("click", function(e){
    e.preventDefault();

    if(originalInputField.value != ""){
        mainErrorMessage.remove();

        /* Create and append new list items*/

        var listItems = document.createElement("li");
        listItems.className = "list-item-new";
        ul1.appendChild(listItems);

        /* Create new input field */

        var newInputField = document.createElement("input");
        newInputField.value = originalInputField.value;
        newInputField.disabled = true;
        
        /* Create the change button */
        var changeButton = document.createElement("button");
        changeButton.innerHTML = "Ändra";

        

        /* Create done button */
        var doneButton = document.createElement("button");
        doneButton.innerHTML = "Färdig";
        doneButton.className = "done-button";

        

        /* Create delete button */
        var deleteButton =document.createElement("button")
        deleteButton.innerHTML = "Radera";

        /* append all the new elements to the new list item */
        listItems.appendChild(newInputField);
        listItems.appendChild(changeButton);
        listItems.appendChild(doneButton);
        listItems.appendChild(deleteButton);

        /* Object with all the functions of the buttons */

        var buttonFunctions = {
            changeButtonFunc: function() {
                changeButton.addEventListener("click", function(e) {
                    e.preventDefault();
        
                    var x = e.target;
                    if(newInputField.disabled == true){
                        newInputField.disabled = false;
                    } else if(newInputField.value == ""){
                        x.parentNode.appendChild(sideErrorMessage)
                        newInputField.disabled = false;
                    } else if(newInputField.value != ""){
                        sideErrorMessage.remove();
                        newInputField.disabled = true;
                    }
                })
            },
            doneButtonFunc: function() {
                doneButton.addEventListener("click", function(e) {
                    e.preventDefault();
        
                    var x = e.target;
                    ul2.appendChild(doneButton.parentNode);
                    doneButton.remove();
                })
            },
            deleteButtonFunc: function() {
                deleteButton.addEventListener("click", function(e) {
                    e.preventDefault();
        
                    var x = e.target;
                    deleteButton.parentNode.remove();
                })
            }
        }

        /* Call all those function */

        buttonFunctions.changeButtonFunc();
        buttonFunctions.doneButtonFunc();
        buttonFunctions.deleteButtonFunc();
        } 
        /* in case input is empty */ 
        else {
            if(mainErrorMessage.innerHTML != ""){
            let form = document.getElementById("form");
            form.appendChild(mainErrorMessage);
            }
        }
})