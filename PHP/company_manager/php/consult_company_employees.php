<?php

$conn;
$connected = false;

include 'connect_database.php';

$sql = $conn->prepare("SELECT employee.id, employee.name, employee.email, employee.address, plant.name, plant.country FROM employee INNER JOIN plant on employee.plant_id = plant.id INNER JOIN company on company.id = plant.company_id WHERE company.name = ?");
$sql->bind_param("s", $name);

$return_values = array();

$return_values["headers"] = array();
$return_values["headers"][0] = "Employee - ID";
$return_values["headers"][1] = "Employee - Name";
$return_values["headers"][2] = "Employee - Email";
$return_values["headers"][3] = "Employee - Address";
$return_values["headers"][4] = "Plant - Name";
$return_values["headers"][5] = "Plant - Country";



$return_values["data"] = array();
$return_values["data"][0] = array();
$return_values["data"][1] = array();
$return_values["data"][2] = array();
$return_values["data"][3] = array();
$return_values["data"][4] = array();
$return_values["data"][5] = array();
$return_values["data_size"] = 0;



if ($connected == true) {

    $name = $_POST["name_consult_company_employees"];

    $sql->execute();

    /* bind result variables */
    $sql->bind_result($data_1, $data_2, $data_3, $data_4, $data_5, $data_6);

    while ($sql->fetch()) {
        $return_values["data"][0][] = mb_convert_encoding($data_1, "UTF-8");
        $return_values["data"][1][] = mb_convert_encoding($data_2, "UTF-8"); 
        $return_values["data"][2][] = mb_convert_encoding($data_3, "UTF-8");
        $return_values["data"][3][] = mb_convert_encoding($data_4, "UTF-8");
        $return_values["data"][4][] = mb_convert_encoding($data_5, "UTF-8");
        $return_values["data"][5][] = mb_convert_encoding($data_6, "UTF-8");
        $return_values["data_size"] = $return_values["data_size"] + 1;
    }
    
    $conn->close();
}

echo json_encode($return_values);
?>