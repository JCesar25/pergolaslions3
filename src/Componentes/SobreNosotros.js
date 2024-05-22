import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import aboutImage from '../Assest/Images/PG11.PNG';

const About = () => (
  <section className="about-section text-center py-5">
    <div className="container">
      <h2 className="mb-4">ELIJA SU PROTECCIÓN SOLAR</h2>
      <p className="lead mb-4">
        ¿Necesita ayuda para tomar las medidas? Contacte con nuestros expertos llamando al (+591) 69053665.
      </p>
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4">
          <h3 className="mb-3">Nuestra Misión</h3>
          <p>
            Proveer soluciones innovadoras y de calidad para la protección solar y el embellecimiento de espacios exteriores,
            satisfaciendo las necesidades y expectativas de nuestros clientes.
          </p>
        </div>
        <div className="col-lg-6 col-md-12 mb-4">
          <h3 className="mb-3">Nuestra Visión</h3>
          <p>
            Ser la empresa líder en el mercado de pérgolas y soluciones para exteriores, reconocida por nuestra calidad,
            innovación y compromiso con el cliente.
          </p>
        </div>
      </div>
      <img src={aboutImage} alt="About Us" className="img-fluid mt-4" />
      <div className="mt-4">
        <a
          href="https://wa.me/59169168685?text=Tengo%20una%20consulta%20con%20las%20pérgolas"
          className="btn btn-success"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp /> Contáctenos en WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default About;
