import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <Link
          to="/"
          className={({ isActive }) => (isActive ? css.active : css.not_active)}
        >
          Home
        </Link>
        <Link
          to="/movies"
          className={({ isActive }) => (isActive ? css.active : css.not_active)}
        >
          Movies
        </Link>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
