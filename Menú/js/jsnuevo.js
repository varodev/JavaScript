function primer(){
    //setAttribute muestra cómo se cambia el valor del atributo src a la imagen
    
    let selector = document.getElementById("primer").value;
    console.log(selector)
    let foto = document.getElementById("foto");
    
    

    if (selector == "no"){
        foto.setAttribute("src", "img/menu-del-dia.jpeg");
    }
    else{
        foto.setAttribute("src", "img/"+ selector + ".jpg");
    }

    if (selector=="no"){
        selector=0;
    }else if (selector=="ensalada"){
        selector = 3;
    }else if(selector=="mejillones"){
        selector = 5;
    }
    return selector
}

function segundo(){
    let selector2 = document.getElementById("segundo").value;
    

    let foto = document.getElementById("foto2");

    
    if (selector2 == "no2"){
        foto.setAttribute("src", "img/menu-del-dia.jpeg");
    }
    else{
        foto.setAttribute("src", "img/"+ selector2 + ".jpg");
    }

    if (selector2=="no2"){
        selector2=0;
    }else if (selector2=="ternera"){
        selector2 = 7;
    }else if(selector2=="paella"){
        selector2 = 6;
    }
    return selector2
}

function postre(){
    let selector3 = document.getElementById("postre").value;
    

    let foto = document.getElementById("foto3");

    
    if (selector3 == "no3"){
        foto.setAttribute("src", "img/menu-del-dia.jpeg");
    }
    else{
        foto.setAttribute("src", "img/"+ selector3 + ".jpg");
    }

    if (selector3 == "no3"){
        selector3 = 0;
    }else if (selector3 == "tarta"){
        selector3 = 3;
    }else if(selector3 == "helado"){
        selector3 = 2;
    }
    return selector3
}

function calcular(){
    
    let resultado = document.getElementById("resultado");
    let descuento=document.getElementById("descuento");

    let primero=primer();
    let segund= segundo();
    let postr=postre();

    //checkbox = boolean

    if (primero== 0){
        resultado.innerHTML="Selecciona un primer plato"
    }else if(segund== 0){
        resultado.innerHTML="Selecciona un segundo plato"
    }else if(postr == 0){
        resultado.innerHTML="Selecciona un postre"
    }else{
        resultado.innerHTML= "el precio total es :"+( primer() + segundo() + postre()) + "€" + " Quieres un descuento?";
        
        if(descuento.checked== true ){
        resultado.innerHTML="Tu precio con descuento es: "+((primer() + segundo() + postre()) *0.9) + "€";
    }  
    }
}