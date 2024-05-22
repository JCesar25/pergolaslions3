import React, { useState } from 'react';

const ContactoFormulario = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Validar campo al cambiar su valor
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMessage = '';
    switch (name) {
      case 'name':
        errorMessage = value.trim() === '' ? 'El nombre es requerido' : '';
        break;
      case 'email':
        errorMessage = !isValidEmail(value) ? 'Correo electrónico inválido' : '';
        break;
      case 'phone':
        errorMessage = !isValidPhone(value) ? 'Número de teléfono inválido' : '';
        break;
      case 'message':
        errorMessage = value.trim() === '' ? 'El mensaje es requerido' : '';
        break;
      default:
        break;
    }
    setErrors(prevState => ({
      ...prevState,
      [name]: errorMessage
    }));
  };

  const isValidEmail = (email) => {
    // Patrón de expresión regular para validar el correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const isValidPhone = (phone) => {
    // Patrón de expresión regular para validar el número de teléfono
    const phonePattern = /^\d{8}$/;
    return phonePattern.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar todos los campos antes de enviar el formulario
    Object.keys(formData).forEach(name => validateField(name, formData[name]));
    // Si no hay errores, enviar el formulario
    if (Object.values(errors).every(error => error === '')) {
      // Aquí puedes agregar la lógica para enviar el formulario
      console.log('Formulario enviado:', formData);
      // Simulación de envío exitoso
      setIsSent(true);
      setTimeout(() => {
        // Limpia los campos del formulario
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setIsSent(false);
      }, 3000);
    }
  };

  return (
    <div className="container" style={styles.container}>
      <h2 style={styles.title}>Contáctanos</h2>
      <p style={styles.description}>Envíanos un mensaje y déjanos tu número y tu consulta.</p>
      {isSent && (
        <div className="alert alert-success" role="alert">
          ¡Mensaje enviado exitosamente!
        </div>
      )}
      <form name="contact" onSubmit={handleSubmit} style={styles.form}>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} style={styles.input} />
              {errors.name && <div className="text-danger">{errors.name}</div>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo</label>
              <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} style={styles.input} />
              {errors.email && <div className="text-danger">{errors.email}</div>}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Telefono</label>
              <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} style={styles.input} />
              {errors.phone && <div className="text-danger">{errors.phone}</div>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Mensaje</label>
              <textarea className="form-control" id="message" name="message" rows="5" value={formData.message} onChange={handleChange} style={styles.input}></textarea>
              {errors.message && <div className="text-danger">{errors.message}</div>}
            </div>
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary" style={styles.button}>ENVIAR</button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#ffffff', 
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginTop: '20px'
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#000000'
  },
  description: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333333'
  },
  form: {
    marginTop: '20px'
  },
  input: {
    backgroundColor: '#ffffff', 
    color: '#000000', 
    border: '1px solid #000000', 
    borderRadius: '4px'
  },
  button: {
    backgroundColor: '#000000', 
    color: '#ffffff', 
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default ContactoFormulario;
