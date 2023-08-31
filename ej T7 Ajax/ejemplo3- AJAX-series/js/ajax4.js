

function cargarDatos()
{
    //Creamos el objeto XMLHttpRequest que gestiona toda la comunicación AJAX
    let objetoAjax = new XMLHttpRequest();

    //url del servidor donde nos responden con datos en formato JSON
    let urlServidor='http://127.0.0.1:3000/lista_tv_series';

    objetoAjax.open("GET", urlServidor, true);
    objetoAjax.send();

    objetoAjax.onreadystatechange = gestionarDatos;
}

function gestionarDatos()
{
    if ( (this.readyState == 4 ) && (this.status == 200) )
    {
        listaObjetos = JSON.parse(this.responseText);
        console.log(listaObjetos);

        for (let i=0; i < listaObjetos.length; i++)
        {   
            console.log(listaObjetos[i].original_name);
        }
    }
}

