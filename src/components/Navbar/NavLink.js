import React from 'react';
import { MenuItemLink } from '../../styles/Navbar.elements'
const NavLink = ({ navLinkId, scrollToId }) => {

	const handleClick = () => {
		document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<MenuItemLink
		id={navLinkId}
		onClick={handleClick}
		>
			{navLinkId}
		</MenuItemLink>
	);
};

export default NavLink;