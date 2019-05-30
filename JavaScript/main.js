
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

  else
    return true;

}
