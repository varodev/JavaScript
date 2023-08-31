function cambiarfoto(foto){
    console.log(foto);
    document.getElementById("fotogrande").setAttribute("src" , "img/" + foto + ".jpg");
}

function aclarar(event){
    let foto = event.target;
    //console.log(foto.getAttribute("alt"));
    foto.style.opacity = 0.5;
}

function oscurecer(event){
    let foto = event.target;
    //console.log(foto.getAttribute("alt"));
    foto.style.opacity = 1;
}
