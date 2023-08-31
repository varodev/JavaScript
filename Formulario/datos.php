<?php

// lo cogemos del html y pilla el nombre por la etiqueta name (lo que tiene dentro)

$minombre = $_GET["nombre"];

$miapellido = $_GET["apellido"];

$miemail = $_GET["email"];

$mimensaje=$_GET["mensaje"];

echo "Nombre: ".$minombre." Apellido: ".$miapellido." Email: ".$miemail." Mensaje: ";

?>