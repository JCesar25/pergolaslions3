import React from "react";
import styled, { keyframes } from "styled-components";
import logo from "../Assest/Images/lg2.PNG";
import 'bootstrap/dist/css/bootstrap.min.css';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(50%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const HeaderContainer = styled.header`
  background-color: #000; /* Fondo oscuro */
  color: #fff; /* Texto blanco */
  padding: 1rem 0;
`;

const Logo = styled.img`
  max-width: 350px; /* Ajuste de tamaño del logo */
  height: 170px;
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  color: #ADD8E6; /* Azul claro */
  animation: ${fadeIn} 2s ease-in-out;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-auto">
            <Logo
              src={logo}
              alt="Logo de la empresa"
              className="img-fluid"
            />
          </div>
          <div className="col-auto">
            <Title className="display-4">PÉRGOLAS DE CONFORT</Title>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
