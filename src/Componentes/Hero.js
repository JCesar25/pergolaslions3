import React from "react";
import heroImage from "../Assest/Images/lg.jpg";
import { FaWhatsapp } from 'react-icons/fa';

const Hero = () => (
  <section className="hero-section position-relative text-center text-white">
    <img
      src={heroImage}
      alt="Imagen principal"
      className="img-fluid mt-4"
      style={styles.image}
    />
    <div
      className="position-absolute top-50 start-50 translate-middle"
      style={styles.text}
    >
      <h1 className="display-4">PÉRGOLAS A MEDIDA</h1>
      <p className="lead">
        ¿Quiere protegerse del sol con nuestras pérgolas personalizadas?
      </p>
      <div className="mt-8">
        <a
          href="https://wa.me/59169053665?text=Tengo%20una%20consulta%20con%20las%20pérgolas"
          className="btn btn-success"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={30}/> Contáctenos en WhatsApp
        </a>
      </div>
    </div>
  </section>
);

const styles = {
  image: {
    height: "70vh",
    objectFit: "cover",
  },
  text: {
    color: "#fff",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "20px",
    borderRadius: "10px",
  },
};

export default Hero;
