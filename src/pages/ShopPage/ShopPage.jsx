import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/features/SideBar";
import { Container } from "../../components/common/Container";
import { ShopContent } from "./ShopPage.styled.jsx";

export default function ShopPage() {
    return (
        <Container
            style={{
                height: "100%",
                overflowY: "auto",
            }}
        >
            <ShopContent>
                <SideBar />
                <Suspense>
                    <Outlet />
                </Suspense>
            </ShopContent>
        </Container>
    );
}
