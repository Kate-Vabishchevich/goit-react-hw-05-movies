import { Link } from 'react-router-dom';
import css from './NotFound.module.css';
import pnf from 'images/pnf.png';

const NotFound = () => {
  return (
    <div>
      <img src={pnf} alt="404 page not found" className={css.pnf} />
      <Link to="/" className={css.link}>
        Go home
      </Link>
    </div>
  );
};

export default NotFound;
