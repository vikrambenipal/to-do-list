
function addItem(){
    var listItem = document.createElement("LI"); // create new li
    var itemName = document.getElementById("taskName").value; // retrieve input 
    var node = document.createTextNode(itemName); // create text node with retrieved input
    
    if(itemName == '' || !itemName.trim()){
        alert("Please enter an item");
        document.getElementById("taskName").value = "";
    }else{
    
        listItem.appendChild(node); // put the text in the list element 
        document.getElementById("itemList").appendChild(listItem); // place the list element in the ul

        // Append a 'X' symbol as a span 
        var closeButton = document.createElement("SPAN");
        var buttonSymb = document.createTextNode("X");
        closeButton.className = "close";
        closeButton.appendChild(buttonSymb);
        listItem.appendChild(closeButton);
        var len = document.getElementsByClassName("close");

        var x = 7;
        var close = document.getElementsByClassName("close");
        var i;
        // Iterating through a list of span elements 
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                var erase = this.parentElement;
                erase.style.display = "none";
            }
        }
    }
}
