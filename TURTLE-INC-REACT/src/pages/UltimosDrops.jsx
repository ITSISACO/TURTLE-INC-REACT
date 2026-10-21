import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function UltimosDrops() {
  return (
    <div className="page-ultimos-drops">
      <Header title="Ultimos drops" />
      <Navbar />

      <section className="productos">
        <a className="link-producto" href="#">
          <div className="producto">
            <img src="/short mujer 1.png" alt="short mujer" />
            <span className="proximamente">PRÓXIMAMENTE</span>
            <p className="nuevo">PROXIMAMENTE</p>
            <h3>Short Turtle Inc</h3>
            <p className="precio">$199.000</p>
          </div>
        </a>

        <a className="link-producto" href="#">
          <div className="producto">
            <img src="/bolso 1.png" alt="bolso tortugos" />
            <span className="proximamente">PRÓXIMAMENTE</span>
            <p className="nuevo">PROXIMAMENTE</p>
            <h3>Bolso femenino tortugos</h3>
            <p className="precio">$489.900</p>
          </div>
        </a>

        <a className="link-producto" href="#">
          <div className="producto">
            <img src="/bolso hombre (2).png" alt="Top Mujer" />
            <span className="proximamente">PRÓXIMAMENTE</span>
            <p className="nuevo">PROXIMAMENTE</p>
            <h3>Riñonera Turtle Inc</h3>
            <p className="precio">$199.000</p>
          </div>
        </a>

        <a className="link-producto" href="#">
          <div className="producto">
            <img src="/top 1 (4).png" alt="Top Caparazón" />
            <span className="proximamente">PRÓXIMAMENTE</span>
            <p className="nuevo">PROXIMAMENTE</p>
            <h3>Top mujer Turtle Inc</h3>
            <p className="precio">$159.000</p>
          </div>
        </a>
      </section>

      <Footer />
    </div>
  );
}
