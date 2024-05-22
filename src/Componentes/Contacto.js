import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import Footer from "./Footer";

const Contact = () => (
  <>
    <section className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h2 className="mb-4">Contacta con Nosotros</h2>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <a
              href="https://www.facebook.com/profile.php?id=61559303400437"
              className="text-light mx-3"
            >
              <FaFacebook size={40} />
            </a>

            <a href="https://instagram.com" className="text-light mx-3">
              <FaInstagram size={40} />
            </a>

            <a href="https://tiktok.com" className="text-light mx-3">
              <FaTiktok size={40} />
            </a>
          </div>
        </div>
      </div>
    </section>
    <>
      <Footer />
    </>
  </>
);

export default Contact;
