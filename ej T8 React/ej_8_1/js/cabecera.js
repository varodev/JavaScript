class Cabecera extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const guardarMensaje = this.props.mensaje
        return <h1>Nombre de la Empresa: {guardarMensaje}</h1>
    }
}

let variable = "Sony"
let cabecera = <Cabecera mensaje={variable}/>
ReactDOM.render(cabecera, 
    document.getElementById("id_cabecera"))