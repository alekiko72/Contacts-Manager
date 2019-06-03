<?php
	$inData = getRequestInfo();

  $userId = $inData["userId"];
  $newUser = $inData["newUser"];
  $newPassword = $inData["newPassword"];



	$conn = new mysqli("localhost", "username", "password", "contactmanager");
  if ($conn->connect_error)
	{
		returnWithError( $conn->connect_error );
	}
	else
	{
		$sql = "insert into users (ID, username, password) VALUES ('" . $userId . "','" . $newUser . "','" . $newPassword . "')";
		if( $result = $conn->query($sql) != TRUE )
		{
			returnWithError( $conn->error );
		}
		$conn->close();
	}

  returnWithError("");

  function getRequestInfo()
	{
		return json_decode(file_get_contents('php://input'), true);
	}

	function sendResultInfoAsJson( $obj )
	{
		header('Content-type: application/json');
		echo $obj;
	}

	function returnWithError( $err )
	{
		$retValue = '{"error":"' . $err . '"}';
		sendResultInfoAsJson( $retValue );
	}

?>
