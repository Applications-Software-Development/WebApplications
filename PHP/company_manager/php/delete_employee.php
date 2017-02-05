<?php

$conn;
$connected = false;

include 'connect_database.php';

$sql = $conn->prepare("DELETE FROM employee WHERE id = ?");
$sql->bind_param("s", $id);
$return_values = array();
$return_values["success"] = false;

if ($connected == true) {

    $id = $_POST["id_delete_employee"];
    $result = $sql->execute();

    if ($result && $sql->affected_rows) {
        $return_values["success"] = true;
    }

    $conn->close();
}

echo json_encode($return_values);
?>