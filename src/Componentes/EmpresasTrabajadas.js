import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import empresa1 from '../Assest/Images/Terranova.PNG';
import empresa2 from '../Assest/Images/BArcelo.PNG';
import empresa3 from '../Assest/Images/sevilla.PNG';
import empresa4 from '../Assest/Images/SantaColinas.PNG';

// Agrega más logos de empresas según sea necesario

const Empresas = () => {
  return (
    <section style={styles.section}>
      <Container>
        <h2 style={styles.title}>Empresas y Condominios con los que Hemos Trabajado</h2>
        <Row className="justify-content-center">
          <Col xs={6} sm={4} md={3} lg={2} className="mb-4">
            <img src={empresa1} alt="Empresa 1" style={styles.logo} className="img-fluid" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} className="mb-4">
            <img src={empresa2} alt="Empresa 2" style={styles.logo} className="img-fluid" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} className="mb-4">
            <img src={empresa3} alt="Empresa 3" style={styles.logo} className="img-fluid" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} className="mb-4">
            <img src={empresa4} alt="Empresa 3" style={styles.logo} className="img-fluid" />
          </Col>
          {/* Agrega más columnas según sea necesario */}
        </Row>
      </Container>
    </section>
  );
};

const styles = {
  section: {
    padding: '40px 0',
    backgroundColor: '#f8f9fa'
  },
  title: {
    textAlign: 'center',
    marginBottom: '40px',
    color: '#007bff'
  },
  logo: {
    maxWidth: '100%',
    height: 'auto',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  }
};

export default Empresas;
