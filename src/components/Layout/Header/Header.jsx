import {
    SiteHeader,
    NavBar,
    Link as NavLink,
    LinkText,
    CartIcon,
    CartIndicator,
    Wrapper,
} from "./Header.styled.jsx";
import { Container } from "../../common/Container";
import { useSelector } from "react-redux";
import { getTotalAssortmentQuantity } from "../../../redux/cart/selectors.js";

export default function Header() {
    const selectedItems = useSelector(getTotalAssortmentQuantity);

    return (
        <SiteHeader>
            <Container>
                <NavBar>
                    <Wrapper>
                        <NavLink to="/shop">Shop</NavLink>
                        <NavLink to="/history">History</NavLink>
                    </Wrapper>
                    <NavLink to="/shopping-cart">
                        <LinkText>Shopping Cart</LinkText>
                        <CartIcon />
                        {selectedItems > 0 && <CartIndicator>{selectedItems}</CartIndicator>}
                    </NavLink>
                </NavBar>
            </Container>
        </SiteHeader>
    );
}
