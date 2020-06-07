import styled from 'styled-components';

export const MapWrapper = styled.div`
  height: calc(100vh - 100px);
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
`;

export const SidebarWrapper = styled.div`
  width: 300px;
  margin-left: 10px;
  border: 1px solid;
  height: calc(100vh - 100px);
  overflow: auto;
`

export const MarkerWrapper = styled.div`
  cursor: pointer;
  height: 50px;
  border: 1px solid transparent;
  width: 50px;
  border-radius: 100%;
  overflow: hidden;

  &:hover {
    border-color: blue;
  }

  img {
    width: inherit;
    height: inherit;
    background-color: white;
  }
`;

export const SidebarItem = styled.div`
  border-bottom: 1px solid;
  display: flex;
  align-items: center;

  img {
    height: 50px;
    width: 50px;
    margin-right: 5px;
    background-color: white;
  }
`;