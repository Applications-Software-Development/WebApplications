$(document).ready(function () {

    // Company

    $('#form_insert_company').submit(function (e) {
        // Prevent the button submit default behaviour
        e.preventDefault();

        $.post('php/insert_company.php', $(this).serialize(), function (data) {

            var vars = jQuery.parseJSON(data);

            if (vars.success) {
                document.getElementById("insert_company").innerHTML = "Company added.";
            } else {
                document.getElementById("insert_company").innerHTML = "Company not added.";
            }

        }).fail(function () {
            document.getElementById("insert_company").innerHTML = "An error occured.";
        });

        // don't refresh the page
        return false;
    });

    $('#form_consult_companies').submit(function (e) {
        e.preventDefault();

        $.post('php/consult_companies.php', $(this).serialize(), function (data) {

            var vars = jQuery.parseJSON(data);

            if (vars) {
                CreateTable(vars, "consult_companies");
            } else {
                document.getElementById("consult_companies").innerHTML = "An error occured.";
            }
        }).fail(function () {
            document.getElementById("consult_companies").innerHTML = "An error occured.";
        });

        return false;
    });

    $('#form_delete_company').submit(function (e) {
        e.preventDefault();

        $.post('php/delete_company.php', $(this).serialize(), function (data) {
            var vars = jQuery.parseJSON(data);

            if (vars.success) {
                document.getElementById("delete_company").innerHTML = "Company deleted.";
            } else {
                document.getElementById("delete_company").innerHTML = "Company not deleted.";
            }

        }).fail(function () {
            document.getElementById("apaga_funcionario").innerHTML = "An error occured.";
        });

        return false;
    });

    $('#form_consult_company_employees').submit(function (e) {
        e.preventDefault();

        $.post('php/consult_company_employees', $(this).serialize(), function (data) {

            var vars = jQuery.parseJSON(data);

            if (vars) {
                CreateTable(vars, "consult_company_employees");
            } else {
                document.getElementById("consult_company_employees").innerHTML = "An error occured.";
            }
        }).fail(function () {
            document.getElementById("consult_company_employees").innerHTML = "An error occured.";
        });

        return false;
    });


    // Plant

    $('#form_insert_plant').submit(function (e) {
        e.preventDefault();

        $.post('php/insert_plant.php', $(this).serialize(), function (data) {

            var vars = jQuery.parseJSON(data);

            if (vars.success) {
                document.getElementById("insert_plant").innerHTML = "Plant added.";
            } else {
                document.getElementById("insert_plant").innerHTML = "Plant not added.";
            }

        }).fail(function () {
            document.getElementById("insert_plant").innerHTML = "An error occured.";
        });

        return false;

    });

    $('#form_consult_plants').submit(function (e) {
        e.preventDefault();

        $.post('php/consult_plants.php', $(this).serialize(), function (data) {

            var vars = jQuery.parseJSON(data);

            if (vars) {
                CreateTable(vars, "consult_plants");
            } else {
                document.getElementById("consult_plants").innerHTML = "An error occured.";
            }
        }).fail(function () {
            document.getElementById("consult_plants").innerHTML = "An error occured.";
        });

        return false;
    });

    $('#form_delete_plant').submit(function (e) {
        e.preventDefault();

        $.post('php/delete_plant.php', $(this).serialize(), function (data) {

            var vars = jQuery.parseJSON(data);

            if (vars.success) {
                document.getElementById("delete_plant").innerHTML = "Plant deleted.";
            } else {
                document.getElementById("delete_plant").innerHTML = "Plant not deleted.";
            }
        }).fail(function () {
            document.getElementById("delete_plant").innerHTML = "An error occured.";
        });

        return false;
    });

    // Employee

    $('#form_insert_employee').submit(function (e) {
        e.preventDefault();

        $.post('php/insert_employee.php', $(this).serialize(), function (data) {

            var vars = jQuery.parseJSON(data);

            if (vars.success) {
                document.getElementById("insert_employee").innerHTML = "Employee added.";
            } else {
                document.getElementById("insert_employee").innerHTML = "Employee not added.";
            }

        }).fail(function () {
            document.getElementById("insert_employee").innerHTML = "An error occured.";
        });

        return false;

    });

    $('#form_consult_employees').submit(function (e) {
        e.preventDefault();

        $.post('php/consult_employees.php', $(this).serialize(), function (data) {

            var vars = jQuery.parseJSON(data);

            if (vars) {
                CreateTable(vars, "consult_employees");
            } else {
                document.getElementById("consult_employees").innerHTML = "An error occured.";
            }
        }).fail(function () {
            document.getElementById("consult_employees").innerHTML = "An error occured.";
        });

        return false;
    });

    $('#form_delete_employee').submit(function (e) {
        e.preventDefault();

        $.post('php/delete_employee.php', $(this).serialize(), function (data) {

            var vars = jQuery.parseJSON(data);

            if (vars.success) {
                document.getElementById("delete_employee").innerHTML = "Employee deleted.";
            } else {
                document.getElementById("delete_employee").innerHTML = "Employee not deleted.";
            }
        }).fail(function () {
            document.getElementById("delete_employee").innerHTML = "An error occured.";
        });

        return false;
    });

    //Create the table using the data coming from PHP

    function CreateTable(data, element) {
        var div = document.getElementById(element);
        var tbl = document.createElement('table');

        //Wipe div content
        div.innerHTML = "";

        //Create the table headers
        var tr = tbl.insertRow();
        for (var i = 0; i < data.headers.length; i++)
        {
            var headerCell = document.createElement("TH");
            headerCell.innerHTML = data.headers[i];
            tr.appendChild(headerCell);
        }

        //Fill the table with the data
        for (var i = 0; i < data.data_size; i++) {
            tr = tbl.insertRow();
            for (var j = 0; j < data.headers.length; j++) {
                var td = tr.insertCell();
                td.appendChild(document.createTextNode(data.data[j][i]));
            }
        }
        //Add the table to the div element
        div.appendChild(tbl);
    }

});