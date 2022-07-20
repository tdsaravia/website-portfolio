import { createGlobalStyle } from 'styled-components';
import { Colors } from './styles/mixins'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${Colors.black};
    color: ${Colors.white};
    width:100%;

  }
`;
 
export default GlobalStyle;