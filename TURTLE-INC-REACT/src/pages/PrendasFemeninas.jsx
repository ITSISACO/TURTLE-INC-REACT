import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrendasFemeninas() {
  return (
    <div className="page-prendasfemeninas">
      <Header title="Prendas Femeninas" />
      <Navbar />

      <section className="productos">
        {/* Fila 1 (Primeras 4 prendas) */}
        <div className="producto">
          <Link to="/topmujerprueba">
            <img src="/topmujer.png" alt="Top Mujer Turtle Inc" />
            <h3>Top Mujer Turtle Inc</h3>
            <p className="precio">$69.000</p>
          </Link>
        </div>

        <div className="producto">
          <Link to="/buzorosamujer">
            <img src="/buzo rosa 4.png" alt="Buzo rosa Turtle Inc" />
            <h3>Buzo rosa Turtle Inc</h3>
            <p className="precio">$189.000</p>
          </Link>
        </div>

        <div className="producto">
          <Link to="/buzooversizemujer">
            <img src="/buso mujer 2.png" alt="Buzo Oversize Mujer Turtle Inc" />
            <h3>Buzo Oversize Mujer Turtle Inc</h3>
            <p className="precio">$199.000</p>
          </Link>
        </div>

        <div className="producto">
          <Link to="/joggermujer">
            <img src="/jogger mujer.png" alt="Jogger Mujer Turtle Inc" />
            <h3>Jogger Mujer Turtle Inc</h3>
            <p className="precio">$99.000</p>
          </Link>
        </div>

        {/* Fila 2 (Siguientes 4 prendas) */}
        <div className="producto">
          <Link to="/topblanco">
            <img src="/top blanco mujer.png" alt="Top Blanco Turtle Inc" />
            <h3>Top Blanco Turtle Inc</h3>
            <p className="precio">$69.000</p>
          </Link>
        </div>

        <div className="producto">
          <Link to="/chaquetamujer">
            <img src="/chaquetita mujer.png" alt="Chaqueta Turtle Inc" />
            <h3>Chaqueta Turtle Inc</h3>
            <p className="precio">$219.000</p>
          </Link>
        </div>

        <div className="producto">
          <Link to="/faldamujer">
            <img src="/falda verde 1.png" alt="Falda Turtle Inc" />
            <h3>Falda Turtle Inc</h3>
            <p className="precio">$149.000</p>
          </Link>
        </div>

        <div className="producto">
          <Link to="/vestidodebaño">
            <img src="/traje de baño.png" alt="Vestido de Baño Turtle Inc" />
            <h3>Vestido de Baño Turtle Inc</h3>
            <p className="precio">$199.000</p>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
