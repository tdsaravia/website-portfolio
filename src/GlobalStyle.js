import styled, { createGlobalStyle } from 'styled-components';
import { Colors } from './styles/mixins'

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background: ${Colors.black};
  color: ${Colors.white};
}
`;

export const Container = styled.div`
	width: 100%;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 50px;
	@media screen and (max-width: 960px) {
		padding: 0 30px;
	}
`

export default GlobalStyle;