<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="jss/js.js"></script>
    <link rel="stylesheet" href="css/css.css">
</head>
<body>

    <section>
        <h1>Formulario html5</h1>
        <!--datos.php recoge los datos 2 metodos GET y POST -->

        <form action="datos.php" enctype="" method="GET" id="formulario">

            <!--en el name va el nombre de la variable -->

            <input type="text" name="nombre" id="nom" placeholder="Nombre" required>

            <input type="text" name="apellido" id="apel" placeholder="Apellido" required>

            <input type="email" name="email" id="mail" placeholder="Email" required>

            <textarea name="mensaje" id="msj" cols="30" rows="10" placeholder="Escribe tu mensaje" required ></textarea>

            <!-- -->
            <input type="submit" value="Enviar" id="enviar" onclick="mandar(event)">

        </form>
        <p id="resultado"></p>
    </section>
    
</body>
</html>