class Cabecera extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    let guardiaVariable = this.props.mensaje;
    return <h1>{guardiaVariable}</h1>;
  }
}

let variable = "Cabecera del programa"
const cabecera = <Cabecera mensaje={variable}/>;
ReactDOM.render(cabecera,
  document.getElementById("id_cabecera")
);

