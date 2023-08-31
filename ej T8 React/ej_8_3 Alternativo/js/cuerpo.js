/*Realiza una app que te imprima una lista con el nombre y altura máxima,
los que sean menores de 100 se vean en rojo*/
const datosArboles = [{nombreComun:"cerezo",nombreCientífico: "cerezae",alturaMax:53},
                      {nombreComun:"pino",nombreCientífico: "pinus",alturaMax:93},
                      {nombreComun:"roble",nombreCientífico: "quercus",alturaMax:133},
                      {nombreComun:"encina",nombreCientífico: "encinus",alturaMax:33}
];

class Cuerpo extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const guardarMensaje = this.props.mensaje
        const devolverMensaje = guardarMensaje.map(function(lista){
                                                    let clase = ""
                                                if(lista.alturaMax < 100){
                                                    clase="rojo"
                                                }else{
                                                    clase="verde"
                                                }
                    return <li key={lista.nombreComun} className={clase}>{lista.nombreComun} {lista.alturaMax}</li>});
        return<ul>{devolverMensaje}</ul>
    }
} 
//const datosArboles
let cuerpo = <Cuerpo mensaje ={datosArboles}/>
ReactDOM.render(cuerpo, 
        document.getElementById("id_cuerpo"))