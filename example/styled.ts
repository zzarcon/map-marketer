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
    width: 32px;
    height: 32px;
    padding: 5px;

    &:hover {
      background: rgba(255,255,255,0.7);
    }

    img {
      background: transparent;
    }
  }
`;

export const AppWrapper = styled.div`

`;

export const MapWrapper = styled.div`
  margin-top: 50px;
`;