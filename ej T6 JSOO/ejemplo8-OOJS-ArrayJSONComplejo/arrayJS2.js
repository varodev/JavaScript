let arrayLibrosJSON = [
    {"isbn": "123-456-222", //0 
    "author": 
       {
         "lastname": "De Cervantes",
         "firstname": "Miguel"
       },
   "editor": 
       {
         "lastname": "Ridau",
         "firstname": "José"
       },
     "title": "El Quijote",  
     "category": ["Ficción", "Novela"]
    },
    {"isbn": "456-444-222",  //1
    "author": 
       {
         "lastname": "Aligieri",
         "firstname": "Dante"
       },
   "editor": 
       {
         "lastname": "Ridau",
         "firstname": "José"
       },
     "title": "La Divina Comedia",  
     "category": ["Ficción", "Novela"]
    },
    {"isbn": "666-786-222",  //2
    "author": 
       {
         "lastname": "Shakespeare",
         "firstname": "William"
       },
   "editor": 
       {
         "lastname": "Ridau",
         "firstname": "José"
       },
     "title": "Hamlet",  
     "category": ["Ficción", "Novela"]
    }
];

console.log(arrayLibrosJSON[1].isbn);
console.log(arrayLibrosJSON[1].author.firstname);
console.log(arrayLibrosJSON[1].category[1]);

arrayLibrosJSON[0].isbn = "885-555-5";
arrayLibrosJSON[0].author.firstname = "Lucas";
console.log(arrayLibrosJSON[0].isbn,arrayLibrosJSON[0].author.firstname )

for (let elemento of arrayLibrosJSON){
    if ((elemento.author.firstname).localeCompare("Dante") == 0){
        console.log(elemento.title);
    }
}

