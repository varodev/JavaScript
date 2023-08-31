/*Realiza app que tenga dos estados, mensaje ¡¡ALARMA, ALARMA!! en rojo 
y Todo va bien en verde, se intercambiaran uno con el otro cada 2seg */

class Cuerpo extends React.Component{
    constructor(props){
        super(props)
        this.state={alarma:false}
    }

    render(){
        let guardarMensaje = this.state.alarma
        let clase =""
        let mensajeAlarma=""
        if(guardarMensaje){ 
            mensajeAlarma="ALARMA"
            clase="rojo"
        }else{//como la primera vez vale false, entra por aki y se alterna
           mensajeAlarma="Todo va bien"
            clase="verde"
        }
        return<h1 className={clase}>{mensajeAlarma}</h1>;
    }
}
let cuerpo =<Cuerpo/>
let varibleReactDOM = ReactDOM.render(cuerpo, 
    document.getElementById("id_cuerpo"))

    //Estado de alarma en intervalo//
    let estadoAlarma = false;
    setInterval(function(){
        if(estadoAlarma){
            estadoAlarma = false;
        }else{
            estadoAlarma = true;
        }
        varibleReactDOM.setState({alarma:estadoAlarma})
    }, 2000)




























/*class Cuerpo extends React.Component {
        constructor(props){
            super(props);
            this.state = {alarma: false};
        }
        render() {
            const guardarMensaje = this.state.alarma;
            let mensajeAlarma = "";
            let clase = "";

            if (guardarMensaje){
                mensajeAlarma = "¡¡ALARMA, ALARMA!!";
                clase = "rojo";
            }else{
                mensajeAlarma = "Todo va bien";
                clase = "verde";
            }
            return <h1 className = {clase}>{mensajeAlarma}</h1>;
        }
}

const cuerpo = <Cuerpo/>;
let variableReactDOM = ReactDOM.render(cuerpo,
    document.getElementById("id_cuerpo"));
//alarma//
let estadoAlarma = false;
setInterval(function() {
                    //Vamos cambiando el estado de true a false
                    if (estadoAlarma){
                        estadoAlarma = false;
                    }else{
                        estadoAlarma = true;
                    }
            variableReactDOM.setState({alarma:estadoAlarma});
                    }, 2000);*/
 