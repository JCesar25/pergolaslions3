import React from 'react';

const ContactoFormulario = () => {
  return (
    <div className="container" style={styles.container}>
      <h2 style={styles.title}>Contáctanos</h2>
      <p style={styles.description}>Envíanos un mensaje y déjanos tu número y tu consulta.</p>
      <form name="contact" data-netlify="true" style={styles.form}>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name="name" style={styles.input} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" name="email" style={styles.input} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="tel" className="form-control" id="phone" name="phone" style={styles.input} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" name="message" rows="5" style={styles.input}></textarea>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary" style={styles.button}>Send</button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#ffffff', // Color de fondo blanco
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginTop: '20px'
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#000000' // Color de texto negro
  },
  description: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333333' // Color de texto gris oscuro
  },
  form: {
    marginTop: '20px'
  },
  input: {
    backgroundColor: '#ffffff', // Color de fondo blanco
    color: '#000000', // Color de texto negro
    border: '1px solid #000000', // Borde negro
    borderRadius: '4px'
  },
  button: {
    backgroundColor: '#000000', // Color de fondo negro
    color: '#ffffff', // Color de texto blanco
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default ContactoFormulario;
