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
    row-gap: 12px;
`;

export const MenuItem = styled.li`
    display: block;
    width: 100%;
`;
export const MenuLink = styled(NavLink)`
    display: block;
    width: 100%;

    padding: 14px 16px;
    border-radius: 4px;

    color: white;
    background-color: #1976d2;

    text-align: center;
    text-decoration: none;

    font-size: 18px;

    transition: all 250ms ease;
    &:hover {
        background-color: #1565c0;
    }

    &.active {
        color: #fbe0a5;
        /* color: yellow; */
        background-color: #1257a5;

        &:hover {
            background-color: #1565c0;
        }
    }
`;
