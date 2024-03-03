import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import ContactForm from "../../components/features/ContactForm";
import { Container } from "../../components/common/Container";
import { CartContent } from "./ShopPage.styled.jsx";

export default function CartPage() {
    return (
        <Container
            style={{
                height: "100%",
                overflowY: "auto",
            }}
        >
            <CartContent>
                <ContactForm />
                <Suspense>
                    <Outlet />
                </Suspense>
            </CartContent>
        </Container>
    );
}
