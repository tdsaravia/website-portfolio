import { createGlobalStyle } from 'styled-components';
import { colors } from './styles/mixins'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${colors.black};
    font-family:Inter, Sans-Serif;
    color: ${colors.white};
    width:100%;
    justify-content:center;
    align-items:center;
    width:100%;
    display:flex;
  }
`;
 
export default GlobalStyle;