<?php

$conn;
$connected = false;

include 'connect_database.php';

$sql = $conn->prepare("INSERT INTO employee (name, email, address, plant_id, plant_company_id) VALUES(?, ?, ?, ?, ?)");
$sql->bind_param("sssss", $employee, $email, $address, $plant_id, $plant_company_id);
$return_values = array();
$return_values["success"] = false;

if ($connected == true) {

    $employee = $_POST["name_insert_employee"];
    $email = $_POST["email_insert_employee"];
    $address = $_POST["address_insert_employee"];
    $plant_id = $_POST["plant_id_insert_employee"];
    $plant_company_id = $_POST["plant_company_insert_employee"];

    $result = $sql->execute();

    if ($result && $sql->affected_rows) {
        $return_values["success"] = true;
    }

    $conn->close();
}

echo json_encode($return_values);
?>