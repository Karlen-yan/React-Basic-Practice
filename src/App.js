import html2canvas from "html2canvas";
import { useState } from "react";
import "./App.css";

function App() {
  const [data, setLinea] = useState({
    lineaOne: "",
    lineaTwo: ""
  });

  const [imagen,setImagen] = useState("");

  const onChangeLinea = function(evento) {
    setLinea({...data,[evento.target.name]:evento.target.value});
  };

  const onChangeImagen = function(evento) {
    setImagen(evento.target.value);
  };

  const exportar = function(evento) {
    html2canvas(document.querySelector("#meme")).then(canvas =>{
      
      // es para añadir al body 
      // document.body.appendChild(canvas)

      // ****
      // la variable img convierte a imagen
      var img = canvas.toDataURL("image/png");

      var link = document.createElement('a');
      link.download ='buscador.png';
      link.href=img;
      link.click();

    })

  };
  return (
    <div className="App">
      <select onChange={onChangeImagen}>
        <option value="casa1">Casa en llamas1</option>
        <option value="casa2">Casa en llamas2</option>
        <option value="casa3">Casa en llamas3</option>
        <option value="casa4">Casa en llamas4</option>
        <option value="casa5">Casa en llamas5</option>
      </select>
      <br />
      <input
        onChange={onChangeLinea}
        type="text"
        placeholder="lineaOne"
        name="lineaOne"
      />
      <br />
      <input
        onChange={onChangeLinea}
        type="text"
        placeholder="lineaTwo"
        name="lineaTwo"
      />
      <br />

      <button onClick={exportar}>Exportar</button>

      <div className="meme" id="meme">
        <span>
          {data.lineaOne}
        </span>
        <span>
          {data.lineaTwo}
        </span>
        <br />
        
        <img src={"/img/" + imagen + ".png"} />
      </div>
    </div>
  );
}

export default App;
