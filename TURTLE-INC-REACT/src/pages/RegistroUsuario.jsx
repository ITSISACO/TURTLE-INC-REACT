import { Link, useNavigate } from 'react-router-dom';

export default function RegistroUsuario() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/inicio');
  };

  return (
    <div className="page-registrousuario">
      <div className="registro">
        <h1>Crear cuenta</h1>
        <p className="subtitulo">Regístrate en Turtle Inc.</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Ingresa tu nombre"
            required
          />

          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            placeholder="Ingresa tu apellido"
            required
          />

          <label htmlFor="correo">Correo electrónico</label>
          <input
            type="email"
            id="correo"
            name="correo"
            placeholder="correo@ejemplo.com"
            required
          />

          <label htmlFor="telefono">Teléfono</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            placeholder="Ingresa tu teléfono"
            required
          />

          <label htmlFor="fecha">Fecha de nacimiento</label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            required
          />

          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Crea una contraseña"
            required
          />

          <label htmlFor="confirmar">Confirmar contraseña</label>
          <input
            type="password"
            id="confirmar"
            name="confirmar"
            placeholder="Repite tu contraseña"
            required
          />

          <div className="terminos">
            <input type="checkbox" id="terminos" required />
            <label htmlFor="terminos">Acepto los términos y condiciones</label>
          </div>

          <button type="submit">
            <Link to="/inicio" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}>
              Registrarme
            </Link>
          </button>
        </form>

        <p className="login">
          ¿Ya tienes una cuenta?{' '}
          <Link to="/index">Iniciar sesión</Link>
        </p>
      </div>
    </div>
  );
}
