import { useState } from "react";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import Search from "./components/Search";
import dbColaboradores from "./data/data";
import "./assets/css/app.css";

function App() {
  const [dataColaboradores, setDataColaboradores] = useState(dbColaboradores);
  const [search, setSearch] = useState("");

  //function captura la data del search
  const handleBusqueda = (value) => {
    setSearch(value);
  };

  //function inyecta data a estado desde el formulario
  const handleAddColaborador = (newColaboradores) => {
    setDataColaboradores([...dataColaboradores, newColaboradores]);
  };

  return (
    <>
      <div className="bg-listado">
        <Search dataSearch={handleBusqueda} />
        <div className="container">
          <Formulario addColaborador={handleAddColaborador} />
          <Listado
            dataColaboradores={dataColaboradores}
            dataBusqueda={search}
          />
        </div>
      </div>
    </>
  );
}

export default App;
