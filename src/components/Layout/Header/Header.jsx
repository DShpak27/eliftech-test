import { SiteHeader, NavBar, Link as NavLink, LinkText, CartIcon } from "./Header.styled.jsx";
import { Container } from "../../common/Container";

export default function Header() {
    return (
        <SiteHeader>
            <Container>
                <NavBar>
                    <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="/shopping-cart">
                        <LinkText>Shopping Cart</LinkText>
                        <CartIcon />
                    </NavLink>
                </NavBar>
            </Container>
        </SiteHeader>
    );
}
