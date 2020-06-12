import styled from 'styled-components';

export const pinClassName = 'map-marketer-pin';

export const MapWrapper = styled.div`
  height: calc(100vh - 100px);
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
`;

export const ContentWrapper = styled.div`
  display: flex;
`;

export const SidebarWrapper = styled.div`
  width: 300px;
  margin-left: 10px;
  background-color: white;
  height: calc(100vh - 100px);
  overflow: auto;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
  border-radius: 8px;
  color: #333;
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
  padding: 10px;
  cursor: pointer;
  transition: background .3s;
  
  ${sidebarActiveStyles}
  img {
    height: 50px;
    width: 50px;
    margin-right: 5px;
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