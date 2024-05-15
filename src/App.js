
import Contact from './Componentes/Contacto';
import ContactoFormulario from './Componentes/ContactoFormulario';
import FloatingWhatsAppButton from './Componentes/FloatingWhatsAppButton';
import Footer from './Componentes/Footer';
import Header from './Componentes/Header';
import Hero from "./Componentes/Hero"
import Products from './Componentes/Productos';
import About from './Componentes/SobreNosotros';

function App() {
  return (
    <div >
      <Header/>
      <Hero/>
      <Products/>
      <About/>
      <ContactoFormulario/>
      <Contact/>
      <Footer/>
      <FloatingWhatsAppButton/>
     
      
    </div>
  );
}

export default App;
