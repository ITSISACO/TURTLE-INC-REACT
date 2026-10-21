import Header from '../components/Header';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

export default function Inicio() {
  return (
    <div className="page-inicio">
      <Header title="Bienvenido a TURTLE INC" />
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}
