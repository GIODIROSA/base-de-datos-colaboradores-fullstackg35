import React, { useState } from "react";
import "../assets/css/listado.css";

const Listado = ({ dataColaboradores, dataBusqueda }) => {
  const filtradoColaboradores = dataColaboradores.filter((colaborador) => {
    const busquedaData = dataBusqueda.toLowerCase();

    return (
      colaborador.nombre.toLowerCase().includes(busquedaData) ||
      colaborador.email.toLowerCase().includes(busquedaData)
    );
  });

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Nombre y Apellido</th>
            <th scope="col">Correo</th>
            <th scope="col">Actualización</th>
          </tr>
        </thead>
        <tbody>
          {filtradoColaboradores.map((colaborador) => {
         
            return (
              <tr key={colaborador.id}>
                <td>{colaborador.id}</td>
                <td>{colaborador.nombre}</td>
                <td>{colaborador.email}</td>
                <td className={`${colaborador.priority ? "green" : "red"}`}>
                  {colaborador.priority ? "Actualizado" : "Debe actualizar"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Listado;
