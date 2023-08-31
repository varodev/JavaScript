/*Realizar una app que muestre un contador de segundos, 
cuando cargamos la aplicación mostrará un 0 y cada segundo 
se irá incrementando en una unidad. Usa React.*/

class Cuerpo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tiempo:0};
  }
  render(){
    let guardarMensaje = this.state.tiempo
    return<h1>{guardarMensaje}</h1>
  }
}

  let cuerpo = <Cuerpo/>
  let variableReactDOM = ReactDOM.render(cuerpo, 
    document.getElementById("id_cuerpo"));

    //contador//
    let contador = 0
    setInterval(function(){
        variableReactDOM.setState({tiempo:contador++})
                        }, 1000)

/*
class Cuerpo extends React.Component{
  constructor(props){
    super(props)
    this.state={tiempo:0}
  }
  
  render(){
    let guardarMensaje = this.state.tiempo
    return (<h1>{guardarMensaje}</h1>)
  }
}

let cuerpo = <Cuerpo/>
let variableReactDOM = ReactDOM.render(cuerpo, 
  document.getElementById("id_cuerpo"))

//contador//
let contador = 0
setInterval(function(){
  variableReactDOM.setState({tiempo:contador++}); 
                      }, 1000);*/
