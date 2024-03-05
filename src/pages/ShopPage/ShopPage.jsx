import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/features/SideBar";
import { Container } from "../../components/common/Container";
import { ShopContent } from "./ShopPage.styled.jsx";
import shopApi from "../../redux/shop/api.js";

export default function ShopPage() {
    const { data: shops, isFetching } = shopApi.useGetShopsQuery();

    return (
        <>
            {!isFetching && (
                <Container
                    style={{
                        height: "100%",
                        overflowY: "auto",
                    }}
                >
                    <ShopContent>
                        <SideBar shops={shops} />
                        <Suspense>
                            <Outlet />
                        </Suspense>
                    </ShopContent>
                </Container>
            )}
            {isFetching && null}
        </>
    );
}
