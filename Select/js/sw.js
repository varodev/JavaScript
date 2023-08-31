function cambiar(){
    let selector = document.getElementById("selector").value;
    let posicionSelect = document.getElementById("selector").selectedIndex;
    console.log(posicionSelect);

    let fotoGrande = document.getElementById("foto");

    /*switch(selector){
        case "viajar":
            foto.setAttribute("src", "img/viajes.jpg");
        break;

        case "galicia":
            foto.setAttribute("src", "img/galicia.jpg");
        break;

        case "pv":
            foto.setAttribute("src", "img/pv.jpg");
        break;

        case "catalunya":
            foto.setAttribute("src", "img/catalunya.jpg");
        break;

        case "andalucia":
            foto.setAttribute("src", "img/andalucia.jpg");
        break;

        default:
            foto.setAttribute("src", "img/viajes.jpg");
        break;
    }*/

    let fotos = ["viajes.jpg", "galicia.jpg", "pv.jpg", "catalunya.jpg", "andalucia.jpg"]
    /*switch(posicionSelect){
        case 0:
            fotoGrande.setAttribute("src", "img/" + fotos[0])
        break;
        case 1:
            fotoGrande.setAttribute("src", "img/" + fotos[1])
        break;
        case 2:
            fotoGrande.setAttribute("src", "img/" + fotos[2])
        break;
        case 3:
            fotoGrande.setAttribute("src", "img/" + fotos[3])
        break;
        case 4:
            fotoGrande.setAttribute("src", "img/" + fotos[4])
        break;
    }*/

    fotoGrande.setAttribute("src", "img/" + fotos[posicionSelect])
}

