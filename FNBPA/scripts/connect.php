<?php
if (!isset($_ENV["PHP_ENV"])) {
  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);
}
$servername = "bqtog0adsgvasegsab1x-mysql.services.clever-cloud.com";
$username = "uuzlj1u0e1neylgw";
$dbname = "bqtog0adsgvasegsab1x";
$password = "ClwaRwWm7wBZEKWzD1rN";


// $servername = "bigswfmt9xdwwxeosjaa-mysql.services.clever-cloud.com";
// $username = "uyjojewbw23wwx47";
// $password = "W06QhyULqIFFczwaql4w";
// $dbname = "bigswfmt9xdwwxeosjaa";

// Create connection

$conn = @new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {

  die("Connection failed: " . $conn->connect_error);
}


