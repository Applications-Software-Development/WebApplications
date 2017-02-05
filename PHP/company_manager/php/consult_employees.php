<?php

$conn;
$connected = false;
$sql = "SELECT id, name, email, address, plant_id, plant_company_id FROM employee";
$return_values = array();

$return_values["headers"] = array();
$return_values["headers"][0] = "ID";
$return_values["headers"][1] = "Name";
$return_values["headers"][2] = "Email";
$return_values["headers"][3] = "Address";
$return_values["headers"][4] = "Plant ID";
$return_values["headers"][5] = "Company ID";



$return_values["data"] = array();
$return_values["data"][0] = array();
$return_values["data"][1] = array();
$return_values["data"][2] = array();
$return_values["data"][3] = array();
$return_values["data"][4] = array();
$return_values["data"][5] = array();

$return_values["data_size"] = 0;

include 'connect_database.php';

if ($connected == true) {

    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $return_values["data_size"] = $result->num_rows;
        while ($row = $result->fetch_assoc()) {
            $return_values["data"][0][] = mb_convert_encoding($row["id"], "UTF-8");
            $return_values["data"][1][] = mb_convert_encoding($row["name"], "UTF-8");
            $return_values["data"][2][] = mb_convert_encoding($row["email"], "UTF-8");
            $return_values["data"][3][] = mb_convert_encoding($row["address"], "UTF-8");
            $return_values["data"][4][] = mb_convert_encoding($row["plant_id"], "UTF-8");
            $return_values["data"][5][] = mb_convert_encoding($row["plant_company_id"], "UTF-8");
        }
    }
    $conn->close();
}

echo json_encode($return_values);
?>