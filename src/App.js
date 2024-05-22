
import Contact from './Componentes/Contacto';
import ContactoFormulario from './Componentes/ContactoFormulario';
import Empresas from './Componentes/EmpresasTrabajadas';
import FloatingWhatsAppButton from './Componentes/FloatingWhatsAppButton';
import Footer from './Componentes/Footer';
import Header from './Componentes/Header';
import Hero from "./Componentes/Hero"
import PergolasImages from './Componentes/PeregolaImagenes';
import Products from './Componentes/Productos';
import ReseñasPergolas from './Componentes/Reseña';
import About from './Componentes/SobreNosotros';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div >
      <Header/>
      <Hero/>
      <Products/>
      <Empresas/>
      <About/>
      <ReseñasPergolas/>
      <PergolasImages/>
      <ContactoFormulario/>
      <Contact/>
      <Footer/>
      <FloatingWhatsAppButton/>
     
      
    </div>
  );
}

export default App;
