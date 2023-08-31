function mostrarNombres(){
    const container = document.getElementById("container");
    const array_nombres = ["pepe","juan","fernando","alfredo"];
    let texto = document.getElementsByClassName("saludo")[0].textContent;

    for(let nombre of array_nombres){
        let h1 = document.createElement("h1");
        let nodo_texto = document.createTextNode(texto + " " + nombre);
        h1.appendChild(nodo_texto);
        container.appendChild(h1);
    }
}