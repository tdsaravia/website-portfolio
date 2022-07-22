import styled from "styled-components";
import { Colors } from './mixins'
import { Container } from '../GlobalStyle'

export const Nav = styled.div`
	background: transparent;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: absolute;
	top: 0;
	z-index: 50;
	width: 100%;
`;

export const Wrapper = styled(Container)`
	display: flex;
	justify-content: space-between;
	height: 80px;
	${Container}
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
    img {
        width:45px;
        height:auto;
        position:relative
    }
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  align-items: center;
  padding: 0.5rem 0rem;

  @media screen and (max-width: 960px) {
    background-color: #2D2D2D;
    position: absolute;
    top: 80px;
    left: ${({ open }) => (open ? "0%" : "-100%")};
    width: 100%;
    height:100vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.2s all ease;
    padding: 0.5rem 0rem;

  }
`;

export const MenuItem = styled.li`
  height: 100%;
  align-items: center;
  justify-content: center;
  display:flex;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0px 1.5rem;
  color: ${Colors.white};
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
  transition: 0.3s all ease;
  font-family: 'Roboto Mono', sans-serif;
  &:hover {
    color: ${Colors.yellow};
    transition: 0.5s all ease;

  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    div {
      width: 30%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 880px) {
    div {
      width: 40%;
      justify-content: center;

      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 500px) {
    div {
      width: 60%;
      justify-content: center;

      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 260px) {
    div {
      width: 100%;
      justify-content: center;

      svg {
        display: flex;
      }
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;

  }
`;

export const Button = styled.button`
    border: 2px solid ${Colors.yellow};
    width:125px;
    height:49px;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto Mono', sans-serif;
    font-weight: 300;
    color: ${Colors.yellow};
    background-color: transparent;
    border-radius: 10px;
    font-size: 18px;
    cursor: pointer;
    margin-left:60px;

    &:hover {
    color: ${Colors.yellow};
    transition: 0.5s all ease;
    background-color: rgb(255,199,0,0.2);
  }
  a {
      text-decoration:none;
      background-color: transparent;
      color: ${Colors.yellow};
  }
  @media screen and (max-width: 960px) {
    margin-left:0px;
  }
`

export const Img = styled.img`
  width:35px;
  height:35px;
`