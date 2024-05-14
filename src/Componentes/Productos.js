import React from "react";
import { FaStar } from "react-icons/fa";
import images from "../Assest/Images/PortadaFAce2.png";

const products = [
  {
    id: 11,
    url: images,
    titulo: "Pérgola Architect de aluminio",
    description:
      "Elegante pérgola de aluminio ideal para cualquier espacio exterior.",
  },
  {
    id: 10,
    url: images,
    titulo: "Pérgola  corredera retráctil",
    description:
      "Elegante pérgola de aluminio ideal para cualquier espacio exterior.",
  },
  {
    id: 9,
    url: images,
    titulo: "Pérgola Attractive de aluminio",
    description:
      "Elegante pérgola de aluminio ideal para cualquier espacio exterior.",
  },
  {
    id: 8,
    url: images,
    titulo: "Pérgola Chill-Out perpendicular de aluminio",
    description:
      "Elegante pérgola de aluminio ideal para cualquier espacio exterior.",
  },
  {
    id: 7,
    url: images,
    titulo: "Pérgola policarbonato Light de aluminio",
    description:
      "Elegante pérgola de aluminio ideal para cualquier espacio exterior.",
  },
  {
    id: 6,
    url: images,
    titulo: "Pérgola Atractive de aluminio1",
    description:
      "Elegante pérgola de aluminio ideal para cualquier espacio exterior.",
  },
  {
    id: 5,
    url: images,
    titulo: "Pérgola Atractive de aluminio2",
    description:
      "Elegante pérgola de aluminio ideal para cualquier espacio exterior.",
  },
  {
    id: 4,
    url: images,
    titulo: "Pérgola Atractive de aluminio",
    description:
      "Elegante pérgola de aluminio ideal para cualquier espacio exterior.",
  },
  {
    id: 3,
    url: images,
    titulo: "Pérgola Attractive de aluminio",
    description:
      "Elegante pérgola de aluminio ideal para cualquier espacio exterior.",
  },
  {
    id: 1,
    url: images,
    title: "Pérgola Architect de aluminio",
    description:
      "Elegante pérgola de aluminio ideal para cualquier espacio exterior.",
  },
  {
    id: 2,
    url: images,
    title: "Pérgola corredera retráctil",
    description: "Diseño innovador y funcional para una sombra ajustable.",
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
