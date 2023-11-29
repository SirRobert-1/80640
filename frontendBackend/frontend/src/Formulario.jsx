import "./Formulario.css";
import axios from "axios";
import { useState } from "react";

function Formulario() {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
  });

  const hacerPeticion = async (e) => {
    try {
      if (e == 1) {
        const res = await axios.get("http://localhost:4567/crear", {
          params: datos,
        });
        return res.data;
      } else if (e == 2) {
        const res = await axios.post("http://localhost:4567/leer", {
          params: datos,
        });
        return res.data;
      } else if (e == 3) {
        const res = await axios.get("http://localhost:4567/actualizar", {
          params: datos,
        });
        return res.data;
      } else if (e == 4) {
        const res = await axios.delete("http://localhost:4567/borrar", {
          params: datos,
        });
        return res.data;
      }
    } catch (error) {
      throw error;
    }
  };

  const crearUsuario = async (e) => {
    e.preventDefault();
    try {
      const res = await hacerPeticion(1);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const leerUsuario = async (e) => {
    e.preventDefault();
    try {
      const res = await hacerPeticion(2);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const actualizarUsuario = async (e) => {
    e.preventDefault();
    try {
      const res = await hacerPeticion(3);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const borrarUsuario = async (e) => {
    e.preventDefault();
    try {
      const res = await hacerPeticion(4);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const cambiarFormulario = (e) => {
    const { name, value } = e.target;
    setDatos({
      ...datos,
      [name]: value,
    });
  };

  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-black text-4xl font-bold mb-5">Inicio de sesión</h1>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Nombre</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              onChange={cambiarFormulario}
              value={datos.nombre}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Apellido</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              onChange={cambiarFormulario}
              value={datos.nombre}
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Registrar</button>
          </div>
          <div>
            <button className="btn mr-2 btn-primary" onClick={crearUsuario}>
              Crear
            </button>
            <button className="btn mr-2 btn-primary" onClick={leerUsuario}>
              Leer
            </button>
            <button
              className="btn mr-2 btn-primary"
              onClick={actualizarUsuario}
            >
              Actualizar
            </button>
            <button className="btn btn-primary" onClick={borrarUsuario}>
              Borrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Formulario;
