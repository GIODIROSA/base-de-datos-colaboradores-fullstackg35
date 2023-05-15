import React, { useState } from "react";

const Search = ({ dataSearch }) => {
  const handleSearch = (e) => {
    dataSearch(e.target.value);
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand">Listado de colaboradores</a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Busqueda"
              aria-label="Search"
              onChange={handleSearch}
            />
          </form>
        </div>
      </nav>
    </>
  );
};

export default Search;
