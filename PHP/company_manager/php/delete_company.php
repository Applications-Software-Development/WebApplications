<?php

$conn;
$connected = false;

include 'connect_database.php';

$sql = $conn->prepare("DELETE FROM company WHERE id = ?");
$sql->bind_param("s", $numero);
$return_values = array();
$return_values["success"] = false;

if ($connected == true) {

    $numero = $_POST["numero_delete_company"];
    $result = $sql->execute();

    if ($result && $sql->affected_rows) {
        $return_values["success"] = true;
    }

    $conn->close();
}

echo json_encode($return_values);
?>