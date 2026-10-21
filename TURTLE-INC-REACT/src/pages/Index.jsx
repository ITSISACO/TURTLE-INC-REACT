import { Link, useNavigate } from 'react-router-dom';

export default function Index() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/inicio');
  };

  return (
    <div className="page-login">
      <div className="dropdown-menu">
        <form className="px-4 py-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleDropdownFormEmail1"
              placeholder="email@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleDropdownFormPassword1"
              placeholder="Password"
            />
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="dropdownCheck" />
              <label className="form-check-label" htmlFor="dropdownCheck">
                Remember me
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            <Link to="/inicio" style={{ color: 'black', textDecoration: 'none', display: 'block', width: '100%' }}>
              Sign in
            </Link>
          </button>
        </form>
        <div className="dropdown-divider"></div>
        <Link className="dropdown-item" to="/registrousuario">
          New around here? Sign up
        </Link>
        <Link className="dropdown-item" to="/olvidastecontrasena">
          Forgot password?
        </Link>
      </div>
    </div>
  );
}
