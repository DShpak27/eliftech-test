import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";

export const SiteHeader = styled.header`
    padding-top: 25px;
    padding-bottom: 25px;

    background-color: #e0e8f6;
`;

export const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;

    @media screen and (min-width: 768px) {
        justify-content: flex-start;
        column-gap: 12px;
    }
`;

export const Link = styled(NavLink)`
    height: 45px;
    width: 75px;

    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 5px;

    padding: 0px 18px;
    border-radius: 4px;

    background-color: #1976d2;
    color: #fff;

    font-size: 16px;
    letter-spacing: 0.4px;
    font-weight: 400;
    text-decoration: none;

    transition: all 250ms ease;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

    cursor: pointer;

    &:hover {
        background-color: #1565c0;
    }

    &.active {
        color: #fbe0a5;
        background-color: #1257a5;

        &:hover {
            background-color: #1565c0;
        }
    }

    @media screen and (min-width: 768px) {
        width: max-content;
    }
`;
export const LinkText = styled.span`
    display: none;

    @media screen and (min-width: 768px) {
        display: block;
    }
`;

export const CartIcon = styled(TiShoppingCart)`
    font-size: 24px;

    @media screen and (min-width: 768px) {
        font-size: 20px;
    }
`;
