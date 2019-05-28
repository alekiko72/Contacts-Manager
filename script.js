function addRow(){

    // Get all the elements the user inputs for the contacts table
    var name = document.getElementById('Name').value;
    var number = document.getElementById('Number').value;
    var email = document.getElementById('Email').value;

    // Pass Table into Javascript
    var table = document.getElementsByTagName('table')[0];
    
    // Create a new row at the end of the table
    var newRow = table.insertRow(table.rows.length);

    // Create all the cells needed
    var cell0 = newRow.insertCell(0);
    var cell1 = newRow.insertCell(1);
    var cell2 = newRow.insertCell(2);
    var cell3 = newRow.insertCell(3);
    var cell4 = newRow.insertCell(4);
    var cell5 = newRow.insertCell(5);
    
    // Add the elements to each cell
    cell0.innerHTML = (table.rows.length-1);
    cell1.innerHTML = name;
    cell2.innerHTML = number;
    cell3.innerHTML = email;

    // Create Buttons for edit and delete
    var edito = document.createElement("IMG");
    edito.setAttribute("src", "Images/leafedit.png");
    cell4.appendChild(edito);

    var deleto = document.createElement("IMG");
    deleto.setAttribute("src", "Images/leafdelete.png");
    cell5.appendChild(deleto);

}
