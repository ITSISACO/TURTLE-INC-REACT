import { useState } from 'react';

export default function Pago() {
  const [pagado, setPagado] = useState(false);

  const pagar = () => {
    setPagado(true);
  };

  return (
    <div className="page-pago">
      <header>
        <h1>TURTLE INC</h1>
      </header>

      <div className="contenedor">
        <div className="producto">
          <div className="galeria">
            <img
              id="imagenProducto"
              src="/camisa h (2).png"
              onError={(e) => {
                e.currentTarget.src = '/camisa h (2).png';
              }}
              alt="Camisa"
            />
          </div>

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzPyiUbDUCChqtKs_xhTOrKP3eNNP82OSHLpzEWLUQpn6t0wetKXdo&s=10"
            alt="Camiseta"
          />

          <h2>Camiseta Oversize</h2>

          <p>Color: Negro</p>
          <p>Talla: M</p>

          <div className="precio">
            Total: <span>$199.000</span>
          </div>
        </div>

        <div className="pago">
          <h2>Información de Pago</h2>

          <form onSubmit={(e) => { e.preventDefault(); pagar(); }}>
            <label>Número de tarjeta</label>
            <input type="text" placeholder="1234 5678 9012 3456" />

            <label>Nombre del titular</label>
            <input type="text" placeholder="Nombre completo" />

            <div className="fila">
              <div className="campo">
                <label>Direccion</label>
                <input type="text" placeholder="Ej:cra 82 #9A sur 79" />
              </div>

              <div className="campo">
                <label>Numero de celular</label>
                <input type="tel" placeholder="123" />
              </div>
            </div>

            <button type="button" onClick={pagar}>
              Confirmar Pago
            </button>
          </form>

          <div id="mensaje" style={{ display: pagado ? 'block' : 'none' }}>
            ✅ ¡Compra realizada con éxito!
          </div>
        </div>
      </div>
    </div>
  );
}
