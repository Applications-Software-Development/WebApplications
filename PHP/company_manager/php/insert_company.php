<?php

$conn;
$connected = false;

include 'connect_database.php';

$sql = $conn->prepare("INSERT INTO company (name) VALUES (?)");
$sql->bind_param("s", $nome);
$return_values = array();
$return_values["success"] = false;

if ($connected == true) {

    $nome = $_POST["name_insert_company"];

    $result = $sql->execute();
    if ($result && $sql->affected_rows) {
        $return_values["success"] = true;
    }

    $conn->close();
}

echo json_encode($return_values);
?>