/*Sobre la base html adjunta (https://codepen.io/jluis_b/pen/ZEOygqW), realizar un
programa javascript que tenga almacenadas 6 imágenes (dos tipos diferentes) en dos
arrays, cuando se pulse un botón se mostrará cada una de ellas en cada uno de los divs
del html. Las de tipo 1 irán a los divs de la clase internoPar, mientras que las de tipo 2
irán a los divs de la clase internoImPar. Utilizar bucles*/
function insertarImagenes() {
    let div_pares = null; //padre
    let div_impares = null; //padre
    let imagenes = null; //hijo imagen

    var array_imagenes_pares = ["https://live.staticflickr.com/6031/6350805837_08b3279ae9_n.jpg",
        "https://live.staticflickr.com/7433/9331726263_0bb69320c1_b.jpg",
        "https://live.staticflickr.com/7259/7655022536_9d51e82f39_b.jpg"
    ];

    var array_imagenes_impares = ["https://live.staticflickr.com/7794/27078024981_be6c23439a_n.jpg",
        "https://live.staticflickr.com/65535/49669822126_a5897cf3ec_n.jpg",
        "https://live.staticflickr.com/7691/27128071565_841cd43d88_n.jpg"
    ];

    div_pares = document.getElementById("central").getElementsByClassName("internoPar");
    div_impares = document.getElementById("central").getElementsByClassName("internoImPar");

    for (let i = 0; i < div_pares.length; i++) {
        imagenes = document.createElement("img");
        imagenes.src = array_imagenes_pares[i];
        imagenes.width = "200"
        imagenes.height = "200"
        div_pares[i].appendChild(imagenes)
    }

    for (let i = 0; i < div_impares.length; i++) {
        imagenes = document.createElement("img");
        imagenes.src = array_imagenes_impares[i];
        imagenes.width = "200"
        imagenes.height = "200"
        div_impares[i].appendChild(imagenes);
    }
}