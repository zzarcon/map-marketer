import styled, {createGlobalStyle} from 'styled-components';
import { pinClassName } from '../src';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: Helvetica;
    background-color: #D8D1F5;
  }

  * {
    box-sizing: content-box;
  }

  .${pinClassName} {
    
  }
`;

export const AppWrapper = styled.div`

`;

export const MapWrapper = styled.div`
  margin-top: 50px;
`;