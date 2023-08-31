class Pie extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const guardarMensaje = this.props.mensaje
        return<p>Fecha del día: {guardarMensaje}</p>
    }
}

let fecha = new Date()
let pie = <Pie mensaje={fecha.toDateString()}/>
ReactDOM.render(pie, 
    document.getElementById("id_pie"))

