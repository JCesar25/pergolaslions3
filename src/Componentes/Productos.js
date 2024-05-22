import React from "react";
import { FaStar } from "react-icons/fa";

import images1 from "../Assest/Images/PG1.jpg";
import images2 from "../Assest/Images/PG2.jpg";
import images3 from "../Assest/Images/PG6.jpg";
import images4 from "../Assest/Images/PG3.jpg";
import images5 from "../Assest/Images/PG4.jpg";
import images6 from "../Assest/Images/PG7.jpg";
import images7 from "../Assest/Images/PG9.jpg";

const products = [
  {
    id: 11,
    url: images1,
    title: "Pérgola Policarbonato y Metalicas",
    description:
      "Las cocheras techadas de estructura metálica y policarbonato .",
  },
  {
    id: 10,
    url: images2,
    title: "Pérgola  corredera retráctil",
    description:
      "Elegante pérgola de aluminio ideal para cualquier espacio exterior.",
  },
  {
    id: 9,
    url: images3,
    title: "Pérgola Para Garaje, Techo Para Cochera cochera, ",
    description:
      "Las cocheras techadas con policarbonato celular y estructura metálica son increíblemente funcionales ya que protegen su automóvil de los rayos solares y la lluvia.",
  },
  {
    id: 8,
    url: images4,
    title: "Pérgola Chill-Out perpendicular de aluminio",
    description:
      "Elegante pérgola de aluminio ideal para cualquier espacio exterior.",
  },
  {
    id: 7,
    url: images5,
    title: "Pérgola policarbonato Light de aluminio",
    description:
      "Elegante pérgola de aluminio ideal para cualquier espacio exterior.",
  },
  {
    id: 6,
    url: images6,
    title: "Pérgola aluminio colinas de Santa cruz",
    description:
      "Elegante pérgola de aluminio ideal para cualquier espacio exterior.",
  },
  {
    id: 5,
    url: images7,
    title: "Pérgola Atractive de aluminio de Terranova",
    description:
      "Elegante pérgola de aluminio ideal para cualquier espacio exterior.",
  },

  // Añade más productos aquí con descripciones
  // Añade más productos aquí
];

const Products = () => (
  <section className="text-center py-5">
    <div className="container">
      <h2 className="mb-4">PRODUCTOS POPULARES</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={product.url}
                alt={product.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <div className="mb-3">
                  <FaStar color="#FFD700" />
                  <FaStar color="#FFD700" />
                  <FaStar color="#FFD700" />
                  <FaStar color="#FFD700" />
                  <FaStar color="#FFD700" />
                </div>
                <button className="btn btn-primary">
                  ¡Con un 10% de descuento!
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
