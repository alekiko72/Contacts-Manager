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

    addContact(firstname, lastname, number, email);

    // Create Buttons for edit and delete
    var edito = document.createElement("IMG");
    edito.setAttribute("src", "Images/leafedit.png");
    cell4.appendChild(edito);

    var deleto = document.createElement("IMG");
    deleto.setAttribute("src", "Images/leafdelete.png");
    deleto.setAttribute("class", "table-remove");
    cell5.appendChild(deleto);

}

function addContact(first, last, num, e)
{
	document.getElementById("contactAddResult").innerHTML = "";
	
	var jsonPayload = '{ firstName : "' + first + '", lastName : "' + last + '", phoneNumber : "' + num + '", email : "' + e + '", "userID" : ' + userID + '}';
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
	userID = 0;

	hideOrShow( "loggedInDiv", false);
	hideOrShow( "accessUIDiv", false);
	hideOrShow( "loginDiv", true);
}