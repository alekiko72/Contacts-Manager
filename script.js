function addRow(){
    var name = document.getElementById('Name').value;
    var number = document.getElementById('Number').value;
    var email = document.getElementById('Email').value;

    var table = document.getElementsByTagName('table')[0];
    
    var newRow = table.insertRow(table.rows.length);

    var cel0 = newRow.insertCell(0);
    var cel1 = newRow.insertCell(1);
    var cel2 = newRow.insertCell(2);
    var cel3 = newRow.insertCell(2);
    
    cel0.innerHTML = (table.rows.length-1);
    cel1.innerHTML = name;
    cel2.innerHTML = email;
    cel3.innerHTML = number;
}