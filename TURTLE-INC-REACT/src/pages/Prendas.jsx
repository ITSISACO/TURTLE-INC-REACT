import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Prendas() {
  return (
    <div className="page-prendas">
      <Header title="Prendas" />
      <Navbar />

      <div className="Botones">
        <Link to="/prendasmasculinas" className="card-prenda">
          <img src="/hombre prendas.PNG" alt="Prendas masculinas" />
          <div className="texto-boton">
            <h2>Prendas Masculinas</h2>
            <p>Ver colección masculina</p>
          </div>
        </Link>

        <Link to="/prendasfemeninas" className="card-prenda">
          <img src="/mujeres prendas.PNG" alt="Prendas femeninas" />
          <div className="texto-boton">
            <h2>Prendas Femeninas</h2>
            <p>Ver colección femenina</p>
          </div>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
