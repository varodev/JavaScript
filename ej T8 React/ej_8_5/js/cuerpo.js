class Parrafo extends React.Component{
    constructor(props){
        super(props);
    }

    eventoRaton(){
        console.log("Evento de ratón sobre el parrafo");
    }

    render(){
        let mensaje = this.eventoRaton
        return <p onMouseEnter={mensaje}>Lorem ipsum dolor sit amet consectetur 
        adipiscing elit parturient, libero consequat taciti felis mi cras vel sapien, 
        proin sociosqu lectus a purus lacinia hac.</p>;
    }
}
let parrafo = <Parrafo />
ReactDOM.render(parrafo,document.getElementById('id_cuerpo'));


