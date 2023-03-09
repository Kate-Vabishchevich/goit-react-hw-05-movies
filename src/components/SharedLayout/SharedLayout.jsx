import Loader from "components/Loader/Loader";
import { Suspense } from "react";
import { Outlet, Link } from "react-router-dom";
import css from "./SharedLayout.module.css";

const SharedLayout = () => {
    return (
        <>
            <header>
            <Link to='/'>Home</Link>
            <Link to='/movies'>Movies</Link>
        </header>
        <Suspense fallback={<Loader />}>
                <Outlet/>
            </Suspense>
        </>
    );
}

export default SharedLayout;