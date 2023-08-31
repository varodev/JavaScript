/*Realizar una app que muestre un contador de segundos, 
cuando cargamos la aplicación mostrará un 0 y cada segundo 
se irá incrementando en una unidad. 
Utilizad el estado en React.*/
class Contador extends React.Component {
        constructor(props){
            super(props);
            this.state = {tiempo: 0};
        }
        render() {//esto es añadido mio, q cambie de color
            let clase = "";
            if ((this.state.tiempo % 2) == 0){
                clase = "clase_verde";
              }else{
                clase = "clase_rojo";
              }
            return (<h1 className={clase}>{this.state.tiempo}</h1>);
        }
}

const timer = <Contador/>;
let variableRender = ReactDOM.render(timer, 
  document.getElementById('id_cuerpo'));

let contador = 0;
setInterval(function() { 
    variableRender.setState({tiempo: contador}); 
    contador++;
}, 1000);
 