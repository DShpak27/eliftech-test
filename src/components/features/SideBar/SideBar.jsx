/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { SideMenu, MenuTitle, MenuList, MenuItem, MenuLink } from "./SideBar.styled.jsx";

export default function SideBar({ shops }) {
    return (
        <SideMenu>
            <MenuTitle>Choose Your Pharmacy:</MenuTitle>
            <MenuList>
                {shops.map(({ id, name }) => (
                    <MenuItem key={id}>
                        <MenuLink to={id} state={{ storeId: id, store: name }}>
                            {name}
                        </MenuLink>
                    </MenuItem>
                ))}
            </MenuList>
        </SideMenu>
    );
}
