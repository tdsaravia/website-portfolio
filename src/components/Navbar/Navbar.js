import React, { useState } from "react";
import {
  Container,
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
    <Container>
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
                <Button>Resume</Button>
            </MenuItem>
          </Menu>
      </Wrapper>
    </Container>
  );
};

export default Navbar;