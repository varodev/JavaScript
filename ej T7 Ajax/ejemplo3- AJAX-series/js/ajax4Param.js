

function cargarDatos(parametroProceso)
{
    //Creamos el objeto XMLHttpRequest que gestiona toda la comunicación AJAX
    let objetoAjax = new XMLHttpRequest();

    //url del servidor donde nos responden con datos en formato JSON
    let urlServidor='http://127.0.0.1:3000/lista_tv_series';

    objetoAjax.open("GET", urlServidor, true);
    objetoAjax.send();

    objetoAjax.onreadystatechange = function(){
        gestionarDatos(this, parametroProceso);
    };
}

function gestionarDatos(objetoEvento, paramProceso)
{
    let listaObjetos = null;
    
    if ( (objetoEvento.readyState == 4 ) && (objetoEvento.status == 200) )
    {
        listaObjetos = JSON.parse(objetoEvento.responseText);
        console.log(listaObjetos);

        for (let i=0; i < listaObjetos.length; i++)
        {   
            console.log(listaObjetos[i].original_name + paramProceso);
        }
    }
}

