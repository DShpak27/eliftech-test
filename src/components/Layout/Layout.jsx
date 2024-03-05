import { ToastContainer } from "react-toastify";
import { Suspense, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Header from "./Header";
import { Main } from "./Layout.styled.jsx";
import "react-toastify/dist/ReactToastify.css";

export default function Layout() {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (pathname === "/") navigate("/shop");
    }, [pathname, navigate]);

    return (
        <>
            <Header />
            <Main>
                <Suspense>
                    <Outlet />
                </Suspense>
            </Main>
            <ToastContainer autoClose={2000} closeOnClick={true} pauseOnHover={false} />
        </>
    );
}
