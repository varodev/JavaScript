class Cuerpo extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const guardarMensaje = this.props.mensaje
        return <p>Nombre del Videojuego: {guardarMensaje}</p>
    }
}

let variable = "FIFA"
let cuerpo = <Cuerpo mensaje={variable}/>
ReactDOM.render(cuerpo, 
    document.getElementById("id_cuerpo"))