import styled from 'styled-components';

export const pinClassName = 'map-marketer-pin';
const boxStyles = `
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
  border-radius: 8px;
  color: #333;
`;

export const MapWrapper = styled.div`
  height: calc(100vh - 100px);
  width: 100%;
  overflow: hidden;
  ${boxStyles}
`;

export const ContentWrapper = styled.div`
  display: flex;
`;

export const SidebarWrapper = styled.div`
  width: 300px;
  margin-left: 10px;
  height: calc(100vh - 100px);
  overflow: auto;
  ${boxStyles}
`
interface MarkerWrapperProps {
  isFocused?: boolean
}

const markerFocusedStyles = (props: MarkerWrapperProps) => props.isFocused && `
  opacity: 1;
`;

export const MarkerWrapper = styled.div`
  cursor: pointer;
  height: 50px;
  border: 1px solid transparent;
  width: 50px;
  border-radius: 100%;
  opacity: 0.7;
  position: relative;

  ${markerFocusedStyles}

  img {
    width: inherit;
    height: inherit;
    background-color: white;
  }
`;
export const MarkerName = styled.div`
  white-space: nowrap;
`;

interface SidebarItemProps {
  isActive?: boolean;
}
const sidebarActiveStyles = (props: SidebarItemProps) => props.isActive && `
  background: #f0f0f0;
`
export const SidebarItem = styled.div`
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background .3s;
  
  ${sidebarActiveStyles}
  img {
    height: 40px;
    width: 40px;
    margin-right: 5px;
    border-right: 1px solid #e6e6e6;
    background-color: white;
  }
`;

export const SidebarItemName = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CurrentLocationPin = styled.div<{lat: number; lng: number}>`
  width: 15px;
  height: 15px;
  background-color: #4185f4;
  border-radius: 100%;
  border: 2px solid white;
  box-shadow: 0px 0px 8px 1px #4185f4;
`;

export const MarkerDetail = styled.div`
  ${boxStyles}
  z-index: 1;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: -200px;
  width: 280px;
  height: 190px;
  border: 1px solid transparent;
  transition: all .3s;

  &:hover {
    box-shadow: 0px 0px 8px 1px #4185f4;
    border: 1px solid #4185f4;
  }
`;

export const MarkerImages = styled.div`
  display: flex;
  height: 100px;

  img {
    height: inherit;
    border-right: 2px solid white;
  }
`;

export const MarkerInfo = styled.div`
  font-size: 16px;
  padding: 10px;
`;

export const AdditionalInfoWrapper = styled.div`

`;

export const BlanketContent = styled.div`
  color: white;
`;