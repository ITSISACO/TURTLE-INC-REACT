import { Link } from 'react-router-dom';

export default function ProductCard({
  to = '#',
  image,
  alt = '',
  badge = 'PRÓXIMAMENTE',
  nuevo = 'PROXIMAMENTE',
  title,
  price
}) {
  return (
    <Link className="link-producto" to={to}>
      <div className="producto">
        <img src={image} alt={alt} />
        {badge && <span className="proximamente">{badge}</span>}
        {nuevo && <p className="nuevo">{nuevo}</p>}
        <h3>{title}</h3>
        <p className="precio">{price}</p>
      </div>
    </Link>
  );
}
