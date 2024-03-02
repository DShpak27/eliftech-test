import { SideMenu, MenuTitle, MenuList, MenuItem, MenuLink } from "./SideBar.styled.jsx";

export default function SideBar() {
    return (
        <SideMenu>
            <MenuTitle>Choose Your Pharmacy:</MenuTitle>
            <MenuList>
                <MenuItem>
                    <MenuLink to="pharmacy-911">Pharmacy</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink to="mister-blister">Mister Blister</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink to="zdravitsa">Zdravitsa</MenuLink>
                </MenuItem>
            </MenuList>
        </SideMenu>
    );
}
