import { Button, TextField, Box } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function Formulario() {
  const [Cargando, setCargando] = useState(false);
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: "",
    password: "",
  });

  const hacerPeticion = async () => {
    try {
      const res = await axios.get("https://localhost:4567");
      console.log(res.data);
      return res.data;
    } catch (error) {
      throw error;
    }
  };

  const procesarFormulario = async (e) => {
    e.preventDefault();
    console.log("Datos recuperados del formulario", datosFormulario);
    setCargando(true);
    try {
      const res = await hacerPeticion();
      console.log(res);
      setCargando(false);
      if (datosFormulario.nombre === res.alumno) {
        console.log("Bienvenido");
      } else {
        console.log("Usuario no encontrado");
      }
    } catch (error) {
      console.log("error", error);
      setCargando(false);
    }
  };

  const cambiosFormulario = (e) => {
    const { name, value } = e.target;
    setDatosFormulario({ ...datosFormulario, [name]: value });
  };
  return (
    <>
      <form onSubmit={procesarFormulario}>
        <h1>Inicio de sesion</h1>
        <Box m={5}>
          <TextField
            label="Nombre:"
            variant="outlined"
            fullWidth
            onChange={cambiosFormulario}
            name="nombre"
            value={datosFormulario.nombre}
          ></TextField>
        </Box>
        <Box m={5}>
          <TextField
            label="Contraseña:"
            variant="outlined"
            type="password"
            fullWidth
            onChange={cambiosFormulario}
            name="password"
            value={datosFormulario.password}
          ></TextField>
        </Box>
        <Box m={5}>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            fullWidth
            disabled={Cargando}
          >
            Iniciar sesion
          </Button>
        </Box>
      </form>
    </>
  );
}

export default Formulario;
