/*Realizar una app que tenga declarado un array de objetos como
el de abajo a la izda y lo muestre como una lista en el navegador
donde los elementos pares tengan un color diferente a los 
impares, ver a la derecha:*/

let datosArboles = [{nombreVulgar:"pino", nombreCientifico:"Pinus", alturaMaxima:55},
                    {nombreVulgar:"pin", nombreCientifico:"Pinu", alturaMaxima:55},
                    {nombreVulgar:"pi", nombreCientifico:"Pin", alturaMaxima:55},
                    {nombreVulgar:"p", nombreCientifico:"Pi", alturaMaxima:55}
                    ];

    class Cuerpo extends React.Component{
        constructor(props){
            super(props)
        }
        
        render(){
            let clase = ""
            var guardarMensaje = this.props.mensaje;
            var desplegarMensaje = guardarMensaje.map(function(lista, posicion){
                                        if(posicion % 2){
                                            clase="verde"
                                        }else{
                                            clase="rojo"
                                        }
                return <li key={lista.nombreCientifico} className={clase}>{lista.nombreVulgar}</li>})
            return <ul>{desplegarMensaje}</ul>
        }
    }

    //datosArboles
    let cuerpo = <Cuerpo mensaje ={datosArboles}/>
    ReactDOM.render(cuerpo, 
        document.getElementById("id_cuerpo"))

/*const datosArboles = [{nombreComun:"cerezo",nombreCientífico: "cerezae",alturaMax:53},
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
        const devolverMensaje = guardarMensaje.map(function(lista, posicion){
                                                    let clase = ""
                                                if(posicion %2){
                                                    clase="verde"
                                                }else{
                                                    clase="rojo"
                                                }
                    return <li key={lista.nombreComun} className={clase}>{lista.nombreComun}</li>});
        return<ul>{devolverMensaje}</ul>
    }
} 
//const datosArboles
let cuerpo = <Cuerpo mensaje ={datosArboles}/>
ReactDOM.render(cuerpo, 
        document.getElementById("id_cuerpo"))*/