import { Container } from "../../components/common/Container";
import { CartSection } from "./CartPage.styled.jsx";
import CheckoutForm from "../../components/features/CheckoutForm";

export default function CartPage() {
    return (
        <Container
            style={{
                height: "100%",
                overflowY: "auto",
            }}
        >
            <CartSection>
                <CheckoutForm />
            </CartSection>
        </Container>
    );
}
