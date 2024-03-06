import { toast } from "react-toastify";
import shopApi from "../../redux/shop/api.js";
import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "../../components/common/Container";
import { ShopContent } from "./ShopPage.styled.jsx";
import SideBar from "../../components/features/SideBar";

export default function ShopPage() {
    const { data: shops, isSuccess, isError, error } = shopApi.useGetShopsQuery();

    useEffect(() => {
        if (isError) {
            toast.error(`(${error.status}) ${error.data}`);
        }
    }, [isError, error]);

    return (
        <>
            {isSuccess && (
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
            {!isSuccess && null}
        </>
    );
}
