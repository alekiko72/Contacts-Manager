function addRow(){

    // Get all the elements the user inputs for the contacts table
    var firstname = document.getElementById('FirstName').value;
    var lastname = document.getElementById('LastName').value;
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
    cell0.innerHTML = firstname;
    cell1.innerHTML = lastname;
    cell2.innerHTML = number;
    cell3.innerHTML = email;

    // Create Buttons for edit and delete
    var edito = document.createElement("IMG");
    edito.setAttribute("src", "Images/leafedit.png");
    cell4.appendChild(edito);

    var deleto = document.createElement("IMG");
    deleto.setAttribute("src", "Images/leafdelete.png");
    deleto.setAttribute("class", "table-remove");
    cell5.appendChild(deleto);

    addContact(firstname, lastname, number, email);


}

/*function editRow(){

    // Get all the elements the user inputs for the contacts table
    var firstname = document.getElementById('FirstName').value;
    var lastname = document.getElementById('LastName').value;
    var number = document.getElementById('Number').value;
    var email = document.getElementById('Email').value;

    // Pass Table into Javascript
    var table = document.getElementById("tabledo"),rIndex,cIndex;

    for(var i = 0; i < table.rows.length; i++)
    {
        for(var j = 0; j < table.rows[i].cells.length; j++)
        {
            rIndex = this.parentElement.rowIndex;
        }
    }

    table.rows[rIndex].cells[0].innerHTML = firstname;


}*/

function addContact(first, last, num, e)
{
	document.getElementById("contactAddResult").innerHTML = "";
	
	var jsonPayload = '{ firstName : "' + first + '", lastName : "' + last + '", phoneNumber : "' + num + '", email : "' + e + '", "userId" : ' + userId + '}';
	var url = urlBase + '/AddContact.' + extension;
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	try
	{
		xhr.onreadystatechange = function() 
		{
			if (this.readyState == 4 && this.status == 200) 
			{
				document.getElementById("contactAddResult").innerHTML = "Contact has been added";
			}
		};
		xhr.send(jsonPayload);
	}
	catch(err)
	{
		document.getElementById("contactAddResult").innerHTML = err.message;
	}
	
}

/*function addContact()
{
	var newColor = document.getElementById("colorText").value;
	document.getElementById("colorAddResult").innerHTML = "";
	
	var jsonPayload = '{"color" : "' + newColor + '", "userId" : ' + userId + '}';
	var url = urlBase + '/AddColor.' + extension;
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	try
	{
		xhr.onreadystatechange = function() 
		{
			if (this.readyState == 4 && this.status == 200) 
			{
				document.getElementById("colorAddResult").innerHTML = "Color has been added";
			}
		};
		xhr.send(jsonPayload);
	}
	catch(err)
	{
		document.getElementById("colorAddResult").innerHTML = err.message;
	}
	
}*/

function hideOrShow( elementId, showState )
{
	var vis = "visible";
	var dis = "block";
	if( !showState )
	{
		vis = "hidden";
		dis = "none";
	}
	
	document.getElementById( elementId ).style.visibility = vis;
	document.getElementById( elementId ).style.display = dis;
}


function doLogout()
{
	userId = 0;

	hideOrShow( "loggedInDiv", false);
	hideOrShow( "accessUIDiv", false);
	hideOrShow( "loginDiv", true);
}

const contactsTab = document.querySelector("#tabledo > tbody");

function loadTable() {
	const request = new XMLHttpRequest();

	request.open("get", "contacts.json");
	request.onload = () => {

		try{
			const json = JSON.parse(request.responseText);
			populateTable(json);
		}
		catch(e) {
			console.warn("Couldn't load table.");
		}

		request.send();

	}

}
function populateTable(json){

    // Gets rid of table that is initially there
    while(contactsTab.firstChild){
        contactsTab.removeChild(contactsTab.firstChild);
    }

    // Goes through every row and creates it
    json.forEach((row) => {

        // Create a new tr for each row
        const tr = document.createElement("tr");

        // create each cell 
        row.forEach((cell) => {
            const td = document.createElement("td");
            //inserts the text into the cell
            td.textContent = cell;
            // appends each cell the the one before
            tr.appendChild(td);
        });


        // Add the edit and delete buttons
        var edita = document.createElement("IMG");
        edito.setAttribute("src", "Images/leafedit.png");
        cell4.appendChild(edito);

        var deleta = document.createElement("IMG");
        deleto.setAttribute("src", "Images/leafdelete.png");
        deleto.setAttribute("class", "table-remove");
        cell5.appendChild(deleto);

        // Add the new row to the table
        contactsTab.appendChild(tr);
    });
}
document.addEventListener("DOMContentLoaded", () => { loadTable(); })