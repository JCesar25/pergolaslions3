import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ReseñasPergolas = () => {
  return (
    <div className="container" style={styles.container}>
      <h2 style={styles.title}>Características de las pérgolas metálicas</h2>
      
      <div className="card mb-4" style={styles.card}>
        <div className="card-body text-center">
          <p className="card-text" style={styles.cardText}>
            Las pérgolas metálicas son unas estructuras abiertas que tienen como principal objetivo <strong><u>protegernos</u></strong>. Ya sea para darte sombra en los días de sol, evitar mojarte con la lluvia o que no te afecten los diferentes cambios de temperatura; en Parkings y Marquesinas encontrarás justo lo que necesitas.
          </p>
          <p className="card-text" style={styles.cardText}>
            Si vas a decidirte por las pérgolas de metal, debes saber que no hay nada mejor que pasar un rato a la sombra mientras sientes la brisa. Con esta formación podrás sacarle el máximo partido tanto a la terraza como al jardín, incluso proteger tu coche de las inclemencias climatológicas.
          </p>
          <p className="card-text" style={styles.cardText}>
            Un detalle de las pérgolas metálicas es que no son únicamente las vigas y columnas a las que estamos acostumbrados. Hoy en día podemos encontrar en el mercado multitud de estilos para que se adapten a tu vivienda, además de diferentes funcionalidades según lo que estés buscando.
          </p>
          <p className="card-text" style={styles.cardText}>
            Por ejemplo, encontrarás pérgolas metálicas blancas que pueden ser ideales para un ambiente chill out en la terraza. Otras, más modernas, pueden tener un diseño más elaborado y servir como elemento decorativo. Incluso puedes buscar un lugar donde aparcar tu coche, y para ello necesitarás una un poco más robusta.
          </p>
        </div>
      </div>
      
      <h2 style={styles.title}>Tipos de pérgolas metálicas</h2>
      
      <div className="card mb-4" style={styles.card}>
        <div className="card-body text-center">
          <p className="card-text" style={styles.cardText}>
            Según las características de tu pérgola de metal y su utilidad final, podrás encontrar diferentes tipos, versiones y colores. Las hay que se fijan a la pared o que pueden desmontarse fácilmente, todo es cuestión de gustos.
          </p>
          <p className="card-text" style={styles.cardText}>
            Las pérgolas de metal para patio o para cualquier otro lugar, están fabricadas con acero o aluminio. Pueden tener acabados que imitan las vetas de la madera o estar recubiertos de ratán sintético para un aspecto más natural, pero su estructura metálica es lo que ofrece estabilidad y seguridad.
          </p>
          <p className="card-text" style={styles.cardText}>
            Lo más habitual, especialmente en pérgolas metálicas grandes, es acomodarles un toldo para proteger toda la zona del viento o el sol. Puedes imaginar prácticamente cualquier color o estilo, además de buscar piezas correderas para poder aprovechar algunos rayos de luz cuando te interese.
          </p>
          <p className="card-text" style={styles.cardText}>
            A continuación te presentamos los diferentes tipos de pérgolas metálicas que disponemos:
          </p>
          <p className="card-text" style={styles.cardText}>
            <strong><u>Pérgolas metálicas para coches:</u></strong> Las pérgolas de estructura metálica pueden utilizarse para proteger el coche a la hora de aparcarlo en tu patio. Si vas a instalar una pérgola exterior metálica que te sirva como garaje, debes tener muy en cuenta las medidas de tu vehículo y cómo accedes al patio, para tener siempre el espacio suficiente para maniobrar.
          </p>
          <p className="card-text" style={styles.cardText}>
            <strong><u>Pérgolas metálicas a medida:</u></strong> Una pérgola de estructura metálica puede tener muchos usos, especialmente si la adaptas a las condiciones de tu vivienda y la zona geográfica en la que vives. Solicitar una pérgola metálica a medida no tiene ningún tipo de dificultad, solo tendrás que ponerte en contacto con nosotros y acordaremos medidas y materiales.
          </p>
          <p className="card-text" style={styles.cardText}>
            <strong><u>Pérgolas metálicas modernas:</u></strong> Existen, por ejemplo, pérgolas metálicas con policarbonato. Tienen una protección extra frente a la lluvia o los rayos del sol, disipando el calor de manera efectiva. Las pérgolas de metal modernas aportan, además de calidad y un ambiente acogedor, un aspecto más estético para formar tu rincón favorito de la casa.
          </p>
          <p className="card-text" style={styles.cardText}>
            En el catálogo de Parkings y Marquesinas podrás conseguir las mejores ofertas de pérgolas metálicas. Cuéntanos cuál es tu proyecto y te asesoraremos para alcanzar la mejor solución.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '8px',
    marginTop: '20px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#28a745', // Verde
    fontSize: '2rem', // Tamaño más grande
  },
  card: {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    border: 'none',
  },
  cardText: {
    color: '#343a40',
    fontSize: '1.2rem', // Tamaño de fuente más grande
    textAlign: 'center',
  },
};

export default ReseñasPergolas;
