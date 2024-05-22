import React from 'react';
import pergolaCoches1 from '../Assest/Images/PG3.jpg'; // Reemplaza con la ruta correcta
import pergolaCoches2 from '../Assest/Images/lg2.PNG'; 
import pergolaCoches3 from '../Assest/Images/PG9.jpg'; 
import pergolaCoches4 from '../Assest/Images/lg.jpg'; 
import './PergolasImages.css'; // Asegúrate de crear este archivo CSS


const PergolasImages = () => {
  return (
    <div className="row text-center">
      <div className="col-md-4">
        <div className="image-container">
          <img src={pergolaCoches1} alt="Pérgolas para coches" className="img-fluid" />
          <img src={pergolaCoches2} alt="Pérgolas para coches" className="img-fluid hover-image" />
          <p className="image-text">Pérgolas para coches</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="image-container">
          <img src={pergolaCoches3} alt="Pérgolas a medida" className="img-fluid" />
          <img src={pergolaCoches2} alt="Pérgolas a medida" className="img-fluid hover-image" />
          <p className="image-text">Pérgolas a medida</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="image-container">
          <img src={pergolaCoches4} alt="Pérgolas modernas" className="img-fluid" />
          <img src={pergolaCoches2} alt="Pérgolas modernas" className="img-fluid hover-image" />
          <p className="image-text">Pérgolas modernas</p>
        </div>
      </div>
    </div>
  );
};

export default PergolasImages;
