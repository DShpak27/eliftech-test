import { Suspense, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Header from "./Header";
import { Main } from "./Layout.styled.jsx";

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
        </>
    );
}
