var arrayBotones = [
  "Kiyohara Yukinobu",
  "Auguste Renoir",
  "Isaac Hutton",
  "Henry Kellam Hancock",
  "Lyman, Fenton & Co",
];

class Cuerpo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imgArtistas: [] };
    this.LLamadaAPI = this.LLamadaAPI.bind(this);
    this.llamarAPI_imagenes = this.llamarAPI_imagenes.bind(this);
  }

  getImgArtistas(){
    return this.state.imgArtistas
  }

    async LLamadaAPI(e) {
      e.preventDefault();
      let nombre = e.target.innerHTML;
      let peticion = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${nombre}`
      );
      let resultado = await peticion.json();
      let arrayIDs = resultado.objectIDs.slice(0, 10);
      this.llamarAPI_imagenes(arrayIDs);
    }

    async llamarAPI_imagenes(arrayIDs) {
      let arrayImgenes = [];
        for (let id of arrayIDs) {
          let peticion = await fetch(
            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
          ).catch((error) => {
            console.log(error);
          });
          let resultado = await peticion.json();
            if (!resultado.message) {
              let img = resultado.primaryImageSmall;
              arrayImgenes.push(img);
            }
        }
      ppal.setState({imgArtistas:arrayImgenes})
    }
    
    render() {
      let listaSalida = this.props.listabotones.map((elemento, posicion) => (
        <button key={posicion} onClick={this.LLamadaAPI}>
          {elemento}
        </button>
      ));
          let imagenes;
            if(this.getImgArtistas().length > 0){
                imagenes=this.state.imgArtistas.map((img, posicion)=>{
                    return (<img key={posicion} className={"tamanio"} src={img}/>)
                })
            }

      return (
          <div>
              <div>
                  {listaSalida}
              </div>
              <div>
                  {imagenes ? imagenes:""}
              </div>   
          </div>
      );
    }
}

let ppal=ReactDOM.render(<Cuerpo listabotones={arrayBotones}/>, document.getElementById("cuerpo"));
