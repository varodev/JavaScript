class Cabecera extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const guardarMensaje =this.props.mensaje
        return<h1>{guardarMensaje}</h1>
    }
}

let variable = "Arboles de España"
let cabecerra = <Cabecera mensaje = {variable}/>
ReactDOM.render(cabecerra, 
    document.getElementById("id_cabecera"))