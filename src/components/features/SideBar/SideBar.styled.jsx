import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const SideMenu = styled.aside`
    display: flex;
    flex-direction: column;
    row-gap: 16px;

    flex-shrink: 0;

    width: 100%;
    padding: 20px 25px;
    border-radius: 10px;

    background-color: #e0e8f6;

    @media screen and (min-width: 768px) {
        width: 260px;
    }
    @media screen and (min-width: 1024px) {
        width: 360px;
    }
    @media screen and (min-width: 1440px) {
        width: 320px;
    }
`;

export const MenuTitle = styled.h2`
    padding-top: 6px;

    text-align: center;
    font-size: 18px;
`;

export const MenuList = styled.ul`
    display: flex;

    flex-direction: column;
    row-gap: 14px;
`;

export const MenuItem = styled.li`
    display: block;
    width: 100%;

    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;
export const MenuLink = styled(NavLink)`
    display: block;
    width: 100%;

    padding: 12px 16px;
    border-radius: 4px;

    color: white;
    background-color: #4a83bc;

    text-align: center;
    text-decoration: none;

    font-size: 18px;

    transition: all 250ms ease;
    &:hover {
        background-color: #285c98;
    }

    &.active {
        background-color: #285c98;

        &:hover {
            background-color: #285c98;
        }
    }
`;
