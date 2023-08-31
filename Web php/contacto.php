<?php

include "header.php";

?>

<section>
    <img src="images/slider2.jpg" alt="">
</section>
<section class="row">

    
    <div class="col-6">
       
    <h2>Contacta con nosotros</h2>
    <form action="<?php $_SERVER["PHP_SELF"];?>" id="formulario" method="POST" class="formulario">
    <input type="text" name="nombre" id="" placeholder="Nombre" required>
    <input type="text" name="apellido" id="" placeholder="Apellido">
    <input type="email" name="email" id="" placeholder="Email">
    <input type="tel" name="telefono" id="" placeholder="Teléfono" >
    <textarea name="mensaje" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
    <input type="checkbox" name="politica" id=""> He leído y acepto la política de Privacidad
    <input type="button" value="Enviar" onclick=enviar();>

    </form>

<?php


if( !isset($_POST["nombre"]) || !isset($_POST["apellido"]) || !isset($_POST["email"])|| !isset($_POST["telefono"]) || !isset($_POST["mensaje"]) || !isset($_POST["politica"])){

   // echo "formulario no enviado";
}
else{
   $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $email = $_POST["email"];
    $telefono = $_POST["telefono"];
    $mensaje = $_POST["mensaje"];
    $politica = $_POST["politica"]; 

    if($nombre ==""){
        
    }

    echo "<p class='text'>". $nombre." ".$apellido."</p>";
}

?>
    <p id = "respuesta"></p>
    </div>
    <div class = "col-6">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12137.431537024522!2d-3.5306775!3d40.4894685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1613397137376!5m2!1ses!2ses" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum dicta dolorem enim nihil debitis. Voluptate beatae ipsam optio id facere, recusandae aliquid iure quaerat quam quibusdam iusto cupiditate nihil quo.</p>
    </div>
</section>

<h1 class = "centrar">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>

<section class = "row centrar alinear">
    <div class = "col-6">
        <img src="img/noticias1.jpg" alt="">
    </div>
    <div class = "col-6">
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et saepe rem voluptas nemo laborum iste earum quam blanditiis quas corporis repellat, maiores nihil cum dignissimos! Neque adipisci vitae tempore modi.</p>
    </div>
</section>

<?php

include "footer.php";

?>
