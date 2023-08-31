class Cabecera extends React.Component{
    constructor(props){
      super(props);
    }
  
    render() {
      let guardarMensaje = this.props.mensaje
      return <h1> {guardarMensaje}</h1>;
    }
  }
  
  const cabecera = <Cabecera mensaje = "Contador:"/>
  ReactDOM.render(cabecera,
    document.getElementById('id_cabecera'));
