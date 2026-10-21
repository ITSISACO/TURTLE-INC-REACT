import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrendasMasculinas() {
  return (
    <div className="page-prendasmasculinas">
      <Header title="Prendas Masculinas" />
      <Navbar />

      <section className="productos">
        {/* Fila 1 (Primeras 4 prendas) */}
        <div className="producto">
          <Link to="/camisaprueba1">
            <img src="/camisa h (2).png" alt="Camiseta Hombre Turtle Inc" />
            <h3>Camiseta Hombre Turtle Inc</h3>
            <p className="precio">$199.000</p>
          </Link>
        </div>

        <div className="producto">
          <Link to="/buzohombre">
            <img src="/buso v 1.png" alt="Buzo Turtle Inc" />
            <h3>Buzo Turtle Inc</h3>
            <p className="precio">$259.000</p>
          </Link>
        </div>

        <div className="producto">
          <Link to="/zapatoshombre">
            <img src="/tenis 4.png" alt="Zapatos Hombre Turtle Inc" />
            <h3>Zapatos Urbanos Turtle Inc</h3>
            <p className="precio">$299.000</p>
          </Link>
        </div>

        <div className="producto">
          <Link to="/conjuntohombrebuzoysudadera">
            <img src="/conjunto hombre 12.png" alt="Conjunto Turtle Inc" />
            <h3>Conjunto Turtle Inc</h3>
            <p className="precio">$379.000</p>
          </Link>
        </div>

        {/* Fila 2 (Siguientes 4 prendas) */}
        <div className="producto">
          <Link to="/gorrablanca">
            <img src="/gorra 1.png" alt="Gorra Turtle Inc" />
            <h3>Gorra Turtle Inc</h3>
            <p className="precio">$59.000</p>
          </Link>
        </div>

        <div className="producto">
          <Link to="/buzooscurohombre">
            <img src="/buso 1.png" alt="Camisa Manga Larga Turtle Inc" />
            <h3>Camisa Manga Larga</h3>
            <p className="precio">$210.000</p>
          </Link>
        </div>

        <div className="producto">
          <Link to="/gafashombre">
            <img src="/gafa1.png" alt="Gafas Turtle Inc" />
            <h3>Gafas Turtle Inc</h3>
            <p className="precio">$499.000</p>
          </Link>
        </div>

        <div className="producto">
          <Link to="/pantalonetacasual">
            <img src="/pantaloneta 1.png" alt="Pantaloneta Casual Turtle Inc" />
            <h3>Pantaloneta Casual Turtle Inc</h3>
            <p className="precio">$79.000</p>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
