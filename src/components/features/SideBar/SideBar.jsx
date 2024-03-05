import PropTypes from "prop-types";
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

SideBar.propTypes = {
    shops: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
};
