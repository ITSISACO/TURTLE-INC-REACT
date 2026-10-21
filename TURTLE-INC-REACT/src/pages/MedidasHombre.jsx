import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MedidasHombre() {
  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault();
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/prendasmasculinas');
    }
  };

  return (
    <div className="page-medidas">
      <Header title="Medidas Hombre" />
      <Navbar />

      <a href="#back" onClick={handleBack} className="volver">
        ‹ Back
      </a>

      <section className="guia-medidas">
        <h2>GUÍA DE MEDIDAS</h2>

        <div className="imagen-guia">
          <img src="/medidas.PNG" alt="Guía de medidas" />
        </div>

        <table>
          <thead>
            <tr>
              <th>Talla</th>
              <th>Ancho Pecho</th>
              <th>Longitud Manga</th>
              <th>Longitud Frente</th>
              <th>Hombro</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>S</td>
              <td>56.5</td>
              <td>21</td>
              <td>73</td>
              <td>19.5</td>
            </tr>

            <tr>
              <td>M</td>
              <td>58.5</td>
              <td>22</td>
              <td>75</td>
              <td>20.5</td>
            </tr>

            <tr>
              <td>L</td>
              <td>60.5</td>
              <td>23</td>
              <td>77</td>
              <td>20.5</td>
            </tr>

            <tr>
              <td>XL</td>
              <td>62.5</td>
              <td>23.5</td>
              <td>79</td>
              <td>21.5</td>
            </tr>
          </tbody>
        </table>
      </section>

      <Footer />
    </div>
  );
}
