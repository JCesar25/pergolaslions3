// src/components/FloatingWhatsAppButton.js

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsAppButton = () => (
  <a
    href="https://wa.me/59169053665?text=Tengo%20una%20consulta%20con%20las%20pérgolas"
    style={styles.floatingButton}
    target="_blank"
    rel="noopener noreferrer"
  >

    <FaWhatsapp size={60} style={styles.whatsappIcon} />
  </a>
);

const styles = {
  floatingButton: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#25D366',
    color: 'white',
    borderRadius: '50%',
    padding: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: '1000',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    transition: 'transform 0.3s ease',
  },
  whatsappIcon: {
    transition: 'transform 0.3s ease',
  },
  text: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '-40px', /* Ajusta según sea necesario */
    transform: 'rotate(-20deg)', /* Ajusta según sea necesario */
    color: 'black', /* Color de texto negro */
  },
};

export default FloatingWhatsAppButton;
