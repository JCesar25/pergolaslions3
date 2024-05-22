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
              <input type="text" className="form-control" id="name" name="name" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" name="email" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="tel" className="form-control" id="phone" name="phone" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" name="message" rows="5"></textarea>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f8f9fa', // Color de fondo claro
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginTop: '20px'
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#007bff'
  },
  description: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#6c757d'
  },
  form: {
    marginTop: '20px'
  }
};

export default ContactoFormulario;
