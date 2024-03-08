import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { TiShoppingCart as Icon } from "react-icons/ti";

export const SiteHeader = styled.header`
    padding-top: 20px;
    padding-bottom: 20px;

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
    position: relative;
    height: 45px;
    width: 75px;

    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 5px;

    padding: 0px 18px;
    border-radius: 10px;

    background-color: #4a83bc;

    color: #fff;

    font-size: 16px;
    letter-spacing: 0.4px;
    font-weight: 400;
    text-decoration: none;

    transition: all 250ms ease;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

    cursor: pointer;

    &:hover {
        background-color: #285c98;
    }

    &.active {
        background-color: #285c98;

        &:hover {
            background-color: #285c98;
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

export const CartIcon = styled(Icon)`
    font-size: 24px;

    @media screen and (min-width: 768px) {
        font-size: 20px;
    }
`;

export const CartIndicator = styled.div`
    position: absolute;
    top: -10px;
    right: -10px;
    width: 24px;
    height: 24px;
    background-color: #f44336;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 14px;
    line-height: 1;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1);
    font-weight: bold;
`;
export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    column-gap: 12px;
`;
