var button = document.getElementById("enter");
var input = document.getElementById("input");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createlistElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input);
    li.appendChild(document.createTextNode(input.value);
    ul.appendChild(li);

    li.addEventListener("click", function () {
        // creates a boolean that toggles the done class on li:
        // if the list item is clicked htis toggles the done class
        var finished = this.classList.toggle("done");
        // creates a remove button for the finished item:
        var removeButton = document.createElement("button");
        removeButton.classList.add("deleteButton");

        //if the list item is clicked (lis add event listner ) then
        // finished is true
        if (finished) {
            removeButton.appendChild(document.createTextNode("remove"));
            removeButton.classlist = "deleteButton";
            li.appendChild(removeButton);

            removeButton.addEventListener("click", function () {
                this.parentElement.remove();
            });
        } else {
            this.getElementsByClassName("deleteButton")[0].remove();
        }
    });
    // revert input value back to nothing
    input.value ="";
}
function addListAfterClick() {
    if (inputLength() > 0 {
        createlistElement();
    }
}

function addListAfterPress(event){
    if (inputLength() > 0 && event.keyCode == 13) {
        createlistElement();
    }
} 


button.addEventListener("click", addListAFterClick);

input.addEventListener("keypress", addListAfterPress);