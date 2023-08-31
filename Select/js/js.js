function cambiar(){
    //Para que te salga el nombre del pais seleccionado

    let selector = document.getElementById("selector").value;
    console.log(selector);
    
    //Para que te salga la posicion en que está el pais seleccionado

    let posicionSelect = document.getElementById("selector").selectedIndex;
    console.log(posicionSelect);

    let foto = document.getElementById("foto");

    //Cambiamos la foto dependiendo del pais que seleccionemos

    /*if (selector == "no"){
        foto.setAttribute("src", "img/viajes.jpg");
    }
    else if (selector == "galicia"){
        foto.setAttribute("src", "img/galicia.jpg");
    }
    else if (selector == "pv"){
        foto.setAttribute("src", "img/pv.jpg");
    }
    else if (selector == "catalunya"){
        foto.setAttribute("src", "img/catalunya.jpg");
    }
    else if (selector == "andalucia"){
        foto.setAttribute("src", "img/andalucia.jpg");
    }*/

    //Otra forma

    if (selector == "no"){
        foto.setAttribute("src", "img/viajes.jpg");
    }
    else{
        foto.setAttribute("src", "img/"+ selector + ".jpg");
    }
}
