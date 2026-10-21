import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Verificar() {
  const [codigo, setCodigo] = useState('');
  const navigate = useNavigate();

  const handleVerificar = (e) => {
    e.preventDefault();
    alert('Método de pago verificado con éxito');
    navigate('/metodo-actual');
  };

  return (
    <div className="page-verificar">
      <Header title="Verificar Método de Pago" />
      <Navbar />

      <main>
        <section className="contenedor">
          <h2>Verificación de Pago</h2>

          <img
            src="https://cdn-icons-png.flaticon.com/512/633/633611.png"
            alt="Verificación"
          />

          <p>
            Ingresa el código de verificación enviado a tu método de pago.
          </p>

          <form onSubmit={handleVerificar}>
            <label>Código de verificación</label>

            <input
              type="text"
              placeholder="Ejemplo: 123456"
              maxLength={6}
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              required
            />

            <button type="submit">
              Verificar
            </button>
          </form>

          <br />

          <button
            type="button"
            className="btn-volver"
            onClick={() => navigate('/metodo-actual')}
          >
            Volver
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
}
