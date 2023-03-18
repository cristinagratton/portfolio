// Create a new list item when clicking on the "Add" button
function newElement() {
  var inputValue = {
    "name": document.getElementById("myInput").value,
    "date": document.getElementById("dueDate").valueAsDate,
  };
  var table = document.getElementById("myUL");


if (inputValue.name === ''){
  alert("Please write a task");
} else {
  var tr = table.insertRow(-1);
  var td1 = tr.insertCell(0);
  var td2 = tr.insertCell(1);
  td1.innerHTML = inputValue.name;
  td2.innerHTML = Intl.DateTimeFormat('en-GB').format(inputValue.date);
}
document.getElementById("myInput").value = "";

//create close button
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  tr.appendChild(span);

//close function delete on click
  var close = document.getElementsByClassName("close");
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

  //create done button
    var doneButton = document.createElement("SPAN");
    var complete = document.createTextNode("\u2713");
    doneButton.className = "move";
    doneButton.onclick = moveToDo;
    doneButton.appendChild(complete);
    tr.appendChild(doneButton);

};


//move list item
function moveToDo(evt) {
  evt.preventDefault();
  //get the button that was clicked
  var btn = evt.target;
  //find the parent li Element
  var tr = btn.closest("tr");
  //remove the button
  btn.remove();
  //add the li element to the the other List
  //an element can only live in one place
  document.getElementById("myCL").appendChild(tr);
};


//sort list
function sortList() {
  var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myUL");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[1];
        y = rows[i + 1].getElementsByTagName("TD")[1];
        //check if the two rows should switch place:
        if (x.innerHTML > y.innerHTML) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
