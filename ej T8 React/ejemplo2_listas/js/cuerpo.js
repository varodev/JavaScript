/*Realiza app que imprima una lista con los nombres*/

let datosUsuarios = [{nombre:"Isabel", apellido:"Apellido", edad:50},
                     {nombre:"Isabel", apellido:"Apellido", edad:50},
                     {nombre:"Isabel", apellido:"Apellido", edad:50}
                    ];

class Cuerpo extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let guardarMensaje = this.props.mensaje;
    let devolverMensaje = guardarMensaje.map(function(lista){
      return<li key={lista.nombre}>{lista.edad}</li>
    })
    return<ul>{devolverMensaje}</ul>
  }
}     

//datosUsuarios
let cuerpo = <Cuerpo mensaje={datosUsuarios}/>
ReactDOM.render(cuerpo, 
  document.getElementById("id_cuerpo"));

/*let datosUsuarios = [{nombre:"Pepa",apellidos: "López",dni:"9257927D"},
                     {nombre:"LUCAS",apellidos: "SLDFL",dni:"92579989D"},
                     {nombre:"NACHA",apellidos: "López",dni:"9792757FG"}
                    ];
                      
/*class Cuerpo extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    const guardarMensaje = this.props.mensaje;
    //const listaElementos = listaUsuarios.map(function(elemento){
                            //return <li key={elemento.dni}>{elemento.nombre}</li>
                           //});
    const devolverMensaje = guardarMensaje.map(this.hacerMapear);
    return <ul>{devolverMensaje}</ul>;
  }

  hacerMapear(lista){
    return <li key={lista.dni}>{lista.nombre}</li>
  }
}
//datosUsuarios                
let cuerpo = (<Cuerpo mensaje= {datosUsuarios}/>);
ReactDOM.render(cuerpo,
  document.getElementById("id_cuerpo")
);*/




























/*
let datosUsuarios = [{nombre:"Pepa",apellidos: "López",dni:"9257927D"},
                     {nombre:"LUCAS",apellidos: "SLDFL",dni:"92579989D"},
                     {nombre:"NACHA",apellidos: "López",dni:"9792757FG"}
                    ];
                      
class Cuerpo extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    const guardarMensaje = this.props.mensaje;
    const devolverMensaje = guardarMensaje.map(function(lista){
            return <li key={lista.dni}>{lista.nombre}</li>});
    return <ul>{devolverMensaje}</ul>;
  }

}
//datosUsuarios                
let cuerpo = (<Cuerpo mensaje= {datosUsuarios}/>);
ReactDOM.render(cuerpo,
  document.getElementById("id_cuerpo")
);*/
























