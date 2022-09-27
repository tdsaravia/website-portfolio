import React, { useState } from "react";
import {
  Nav,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MobileIcon,
  Button,
  Img
} from "../../styles/Navbar.elements";
import Hamburguer from '../../images/icons/Hamburguer.png'
import Close from '../../images/icons/Close.png'
import Logo from '../../images/icons/Logo.png'
import NavLink from './NavLink'
import { navLinks } from './navLinks';


const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
    <Nav>
      <Wrapper>
          <LogoContainer>
              <img src={Logo} alt="logo" />
          </LogoContainer>

          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <Img src={Close} alt="close" /> : <Img src={Hamburguer} alt="hamburguer" />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            {navLinks.map(({ navLinkId, scrollToId }, idx) => (
              <MenuItem>
                  <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
              </MenuItem>
            ))}
            <MenuItem>
                <Button>
                  <a href="https://drive.google.com/file/d/1jr41K56twVtoeIj75MZk_-RO0fG7PhJ2/view?usp=sharing" rel="noreferrer" target="_blank">
                    Resume
                  </a>
                </Button>
            </MenuItem>
          </Menu>
      </Wrapper>
    </Nav>

    </>
  );
};

export default Navbar;