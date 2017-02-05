<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "companies";
$connected = false;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if (!$conn->connect_error) {
    $connected = true;
}
?>