<?php

$conn;
$connected = false;

include 'connect_database.php';

$sql = $conn->prepare("INSERT INTO plant (name, address, country, company_id) VALUES (?, ?, ?, ?)");
$sql->bind_param("ssss", $name, $address, $country, $company_id);
$return_values = array();
$return_values["success"] = false;

if ($connected == true) {

    $name = $_POST["name_insert_plant"];
    $address = $_POST["address_insert_plant"];
    $country = $_POST["country_insert_plant"];
    $company_id = $_POST["company_id_insert_plant"];
    $result = $sql->execute();

    if ($result && $sql->affected_rows) {
        $return_values["success"] = true;
    }

    $conn->close();
}

echo json_encode($return_values);
?>