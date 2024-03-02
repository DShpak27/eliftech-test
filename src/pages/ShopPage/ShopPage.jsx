import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/features/SideBar";
import { Container } from "../../components/common/Container";
import { PageContent } from "./ShopPage.styled.jsx";

export default function ShopPage() {
    return (
        <Container style={{ display: "flex", flexDirection: "column" }}>
            <PageContent>
                <SideBar />
                <Suspense>
                    <Outlet />
                </Suspense>
            </PageContent>
        </Container>
    );
}
