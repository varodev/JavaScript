class Cabecera extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let guardarMensaje = this.props.mensaje
        return <h1>{guardarMensaje}</h1>
    }
}

let nombreCabecera = "The Metropolitan Museum of Art de Nueva York"
let cabecera = <Cabecera mensaje={nombreCabecera}/>
ReactDOM.render(cabecera, document.getElementById("cabecera"))