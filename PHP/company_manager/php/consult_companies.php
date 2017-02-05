<?php

$conn;
$connected = false;
$sql = "SELECT id, name FROM company";
$return_values = array();

$return_values["headers"] = array();
$return_values["headers"][0] = "ID";
$return_values["headers"][1] = "Name";


$return_values["data"] = array();
$return_values["data"][0] = array();
$return_values["data"][1] = array();

$return_values["data_size"] = 0;

//mb_convert_encoding converts the output from the database to UTF8

include 'connect_database.php';

if ($connected == true) {

    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $return_values["data_size"] = $result->num_rows;
        while ($row = $result->fetch_assoc()) {
            $return_values["data"][0][] = mb_convert_encoding($row["id"], "UTF-8");
            $return_values["data"][1][] = mb_convert_encoding($row["name"], "UTF-8");
        }
    }

    $conn->close();
}


echo json_encode($return_values);
?>