/*Crea un objeto complejo que represente una película. 
Debe almacenar título, año, director (nombre, apellido, edad, nacionalidad, 
año de nacimiento), los géneros en los que se puede encuadrar la película, 
los actores que aparecen (nombre, apellido, edad…). 
Crea un array de películas y una app que muestra el título, el nombre 
y edad del director y el primer actor de las películas anteriores a 2020 */
let arrayPeliculasOscarJSON = [{ ////////////////////////////////////////////////
        "titulo": "Parásitos",
        "año": 2019,
        "director": {
            "nombre": "Bong",
            "apellido": "Joon-ho",
            "edad": 53,
            "nacionalidad": "Coreano",
            "año nacimiento": 1969
        },
        "genero": ["Intriga", "Comedia", "Drama", "Thriller"],
        "actores": [{
                "nombre": "Jang",
                "apellido": "Hye-jin",
                "edad": 52
            },
            {
                "nombre": "Cho",
                "apellido": "Yeo-jeong",
                "edad": 33
            },
            {
                "nombre": "David",
                "apellido": "Strathairm",
                "edad": 18
            }]
    },
    { ////////////////////////////////////////////////
        "titulo": "Nomadland",
        "año": 2021,
        "director": {
            "nombre": "Chloe",
            "apellido": "Zhao",
            "edad": 48,
            "nacionalidad": "Americana",
            "año nacimiento": 1982
        },
        "genero": ["Drama", "Road Movie"],
        "actores": [{
                "nombre": "Frances",
                "apellido": "McDormand",
                "edad": 69
            },
            {
                "nombre": "David",
                "apellido": "Strathairm",
                "edad": 18
            },
            {
                "nombre": "David",
                "apellido": "Strathairm",
                "edad": 18
            }
        ]
    },
    { ////////////////////////////////////////////////
        "titulo": "CODA",
        "año": 2022,
        "director": {
            "nombre": "Sian",
            "apellido": "Heder",
            "edad": 47,
            "nacionalidad": "Americana",
            "año nacimiento": 1987
        },
        "genero": ["Drama", "Discapacidad", "Musica"],
        "actores": [{
                "nombre": "Emilia",
                "apellido": "Jones",
                "edad": 22
            },
            {
                "nombre": "David",
                "apellido": "Strathairm",
                "edad": 18
            },
            {
                "nombre": "Troy",
                "apellido": "Kotsur",
                "edad": 18
            }
        ]
    }
];

for (let elemento of arrayPeliculasOscarJSON) {
    if ((elemento.año) < 2020) {
        console.log(elemento.titulo, elemento.director.nombre, elemento.director.edad, elemento.actores[0])
    }
}