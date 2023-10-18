import DatosEscolares from "./DatosEscolares.jsx";
import DatosPersonales from "./DatosPersonales.jsx";
import "./MiFieldset.css";

//import MiFieldset from "./MiFieldset.jsx";
function Formulario() {
  return (
    <>
      <form action="">
        <DatosPersonales />
        <DatosEscolares />
        <input type="submit" value="Enviar datos" />
      </form>
    </>
  );
}

export default Formulario;
