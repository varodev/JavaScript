/*/*En la cabecera aparecerá el nombre de una empresa de videojuegos*/
class Cabecera extends React.Component{
  constructor(props){
  super(props);
}

  render() {
    const guardarMensaje = this.props.mensaje
    return <h1>Nombre de la Compañia: {guardarMensaje}</h1>;
  }
}

let nombre_compania = "Sony";
let cabecera = <Cabecera mensaje= {nombre_compania}/>;

ReactDOM.render(cabecera, 
  document.getElementById("id_cabecera"));

/*function Cabecera(props) {
  return <h1>{props.mensaje}</h1>;
}

let nombre_compania = "Cia 1";
let cabecera = <Cabecera mensaje= {nombre_compania}/>;

ReactDOM.render(cabecera,document.getElementById('id_cabecera'));*/


