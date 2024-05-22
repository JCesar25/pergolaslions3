import React from 'react';
import logo from "../Assest/Images/lg2.PNG"

const Footer = () => (
  <footer className="bg-light py-4" style={{ backgroundColor: '#E1E9EE' }}> {/* Cambia el color de fondo a #E1E9EE */}
    <div className="container">
      <div className="row align-items-center">
        <div className="col">
          <p className="m-0">© Desde 2006 PergolasExclusivas-Bolivia.bo - Desarrollado por PergolasExclusivas</p>
        </div>
        <div className="col-auto">
          <img src={logo} alt="Logo de la empresa" style={{ width: '320px', height:"60px" }} /> {/* Agrega el logo de la empresa */}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
