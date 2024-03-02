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

    @media screen and (min-width: 640px) {
        width: 640;
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
    border-radius: 10px;

    color: white;
    background-color: #4a5ed1;

    text-align: center;
    text-decoration: none;

    font-size: 18px;

    transition: all 0.2 ease;
    &:not(disabled) {
        &:hover {
            background-color: #404dac;
        }
    }

    &.active {
        color: yellow;
        background-color: #404dac;
    }

    &:disabled {
        opacity: 0.3;
        pointer-events: none;
    }
`;
