import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

//objeto que inicializa el estado
const inicializacionColaboradores = {
  id: 0,
  nombre: "",
  email: "",
};

const Formulario = ({ addColaborador }) => {
  // estado inicial
  const [colaboradorInicio, setColaboradorInicio] = useState(
    inicializacionColaboradores
  );

  //captura el valor del input
  const handleChange = (e) => {
    const { value, id } = e.target;

    setColaboradorInicio({
      ...colaboradorInicio,
      [id]: value,
      id: uuidv4().substring(0, 2),
    });
  };

  //evento submit
  const handleSubmit = (e) => {
    e.preventDefault();

    //se valida formulario
    if (!colaboradorInicio.nombre || !colaboradorInicio.email) {
      Swal.fire({
        icon: "error",
        title: "Cometiste un error",
        text: "Campos vacios, debes completarlo",
        footer: '<a href="#!">Necesitas ayuda?</a>',
      });

      return;
    }

    //envia la data a handleAddColaborador en app.jsx
    addColaborador(colaboradorInicio);

    //mensaje con exito al guardar
    Swal.fire({
      title: "Guardado",
      text: "¡Se ha guardado con exito!",
      icon: "success",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="nombre">
            Nombre
          </label>
          <input
            className="form-control"
            type="text"
            id="nombre"
            placeholder="Nombre y apellido"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="juan.perez@email.com"
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary">Guardar</button>
      </form>
    </>
  );
};

export default Formulario;
