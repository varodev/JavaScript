//en el cuerpo datos de un videojuego
/*habrá un campo de información del videojuego que sea el año
de lanzamiento. Dependiendo de si es anterior o posterior 
al 2020 debe aparecer de un color u otro*/
class Cuerpo extends React.Component{
  constructor(props){
    super(props);
  }  
    
  render(){
    var guardarMensaje1 = this.props.mensaje
    var guardarMensaje2 = this.props.mensaje2
    let clase = "";
    if(guardarMensaje2 < 2020){
      clase = "verde";
    }else{
      clase = "rojo";
    } 
    
    return <div>
      <p>Videojuego: {guardarMensaje1}</p>
      <p className={clase}>Lanzamiento: {guardarMensaje2}</p>
      </div>
  }
}

let datos_juego = {nombre: "Fifa", lanzamiento: 2010};
let cuerpo = <Cuerpo mensaje={datos_juego.nombre} mensaje2={datos_juego.lanzamiento}/>;

ReactDOM.render(cuerpo, 
  document.getElementById("id_cuerpo"));

/*function Cuerpo(props) {
  let clase="";

  if(props.lanzamiento < 2020){
    clase = "clase_verde";
  }else{
    clase = "clase_rojo";
  }

  //return <p>Videojuego: {props.nombre_juego}<p className={clase}> Fecha: {props.lanzamiento}</p></p>;
  return <div>
    <p>Videojuego: {props.nombre_juego}</p>
    <p className={clase}> Fecha: {props.lanzamiento}</p>
  </div>
}

let datos_juego = {nombre_juego: "Juego 1", lanzamiento:"2010"}
let cuerpo = <Cuerpo nombre_juego={datos_juego.nombre_juego} lanzamiento={datos_juego.lanzamiento}/>;

ReactDOM.render(cuerpo, document.getElementById('id_cuerpo'));*/

