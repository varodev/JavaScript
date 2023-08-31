//en el pie la fecha del día (usar Date y el método toDateString())
class Pie extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const guardarMensaje = this.props.mensaje
    return <p>Fecha del día: {guardarMensaje}</p>;
  }
}

const fecha = new Date();
let pie = <Pie mensaje={fecha.toDateString()}/>;

ReactDOM.render(pie,
  document.getElementById('id_pie'));

/*function Pie(props) {
  return (<p>{props.mensaje}</p>);
}

const fecha = new Date();
let pie = <Pie mensaje={FECHA.toDateString()}/>;

ReactDOM.render(pie,document.getElementById('id_pie'));*/

