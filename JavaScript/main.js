var urlBase = 'http://www.cop4331.org/LAMPAPI';
var extension = "php";

var userId = 0;
var firstName = "";
var lastName = "";

function completeInfo()
{
  var username = document.getElementById('userbox').value;
  var password = document.getElementById('passwordbox').value;

  if (username == "" && password == "")
  {

    alert("Please, enter your login information");
    return false;
  }

  if (username == "")
  {
    alert("Please, insert your username");
    return false;
  }

  if (password == "")
  {
    alert("Please, insert your password");
    return false;
  }


  doLogin();

}

function erase()
{
  document.getElementById('inputUserName').value = "";
  document.getElementById('inputPassword').value = "";
  document.getElementById('registrationAlert').innerHTML = "";


}

function register()
{

  var newUsername = document.getElementById('inputUserName').value;
  var newPassword = document.getElementById('inputPassword').value;


  if (newUsername == "" && newPassword == "")
  {
    document.getElementById('registrationAlert').innerHTML = "Fill the boxes";
    return false;
  }

  if (newUsername == "")
  {
    document.getElementById('registrationAlert').innerHTML = "Enter Username";
    return false;
  }

  if (newPassword == "")
  {
    document.getElementById('registrationAlert').innerHTML = "Enter Password";
    return false;
  }

 	var jsonPayload = '{ "userId" : "' + userId + '", "newUser" : "' + newUsername + '", "newPassword" : "' + newPassword + '", "userId" : ' + userId + '}';

	var url = urlBase + '/Registration.' + extension;

	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	try
	{
		xhr.onreadystatechange = function()
		{
		};
		xhr.send(jsonPayload);
	}
	catch(err)
	{

	}

  erase();
  $('#popup').modal('hide');

}

function doLogin()
{
	userId = 0;
	firstName = "";
	lastName = "";

	var login = document.getElementById("userbox").value;
	var password = document.getElementById("passwordbox").value;

	document.getElementById("loginResult").innerHTML = "";

  var jsonPayload = '{"username" : "' + login + '", "password" : "' + password + '"}';
	var url = urlBase + '/Login.' + extension;

	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, false);
	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	try
	{
		xhr.send(jsonPayload);

		var jsonObject = JSON.parse( xhr.responseText );

		userId = jsonObject.id;

		if( userId < 1 )
		{
			document.getElementById("loginResult").innerHTML = "User/Password combination incorrect";
			return;
		}

		firstName = jsonObject.firstName;
		lastName = jsonObject.lastName;

		window.name = firstName + " " + lastName;

		document.getElementById("userbox").value = "";
		document.getElementById("passwordbox").value = "";
    window.location.href= "http://www.cop4331.org" + '/menu.html';


	}
	catch(err)
	{
		document.getElementById("loginResult").innerHTML = err.message;

	}

}
