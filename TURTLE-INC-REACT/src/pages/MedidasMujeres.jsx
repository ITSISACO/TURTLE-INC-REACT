import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MedidasMujeres() {
  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault();
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/prendasfemeninas');
    }
  };

  return (
    <div className="page-medidas">
      <Header title="Medidas Mujer" />
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
              <td>35</td>
              <td>17</td>
              <td>38</td>
              <td>8.5</td>
            </tr>

            <tr>
              <td>M</td>
              <td>37</td>
              <td>18</td>
              <td>39.5</td>
              <td>9</td>
            </tr>

            <tr>
              <td>L</td>
              <td>39</td>
              <td>19</td>
              <td>41</td>
              <td>9.5</td>
            </tr>

            <tr>
              <td>XL</td>
              <td>41</td>
              <td>20</td>
              <td>43</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
      </section>

      <Footer />
    </div>
  );
}
