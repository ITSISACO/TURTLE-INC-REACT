import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Caparazones() {
  return (
    <div className="page-caparazones">
      <Header title="Caparazones" />
      <Navbar />

      <div className="contenedor">
        <div className="info">
          <h2>Información</h2>

          <p>Sigue siendo parte de la manada tortuga.</p>

          <p>Los Caparazones son nuestro sistema de recompensas.</p>

          <p>Por cada compra que hagas en la tienda, ganarás caparazones que podrás usar para obtener descuentos y recompensas exclusivas.</p>

          <p>Cuanto más compres, más caparazones acumulas y mejores beneficios obtienes.</p>

          <p>(Las recompensas pueden variar según promociones o eventos especiales en tienda.)</p>
        </div>

        <div className="recompensas">
          <h2>RECOMPENSAS</h2>

          <p>25% de descuento → 100</p>

          <p>50% de descuento → 200</p>

          <p>75% de descuento → 350</p>

          <p>99% de descuento → 666</p>

          <Link to="/caparazones2" className="boton1">
            Canjear Caparazones
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
