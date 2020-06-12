import * as React from 'react';
import {FC} from 'react';
import { SidebarWrapper, SidebarItem, SidebarItemName } from './styled';
import { Marker } from './types';

export interface SidebarProps {
  markers: Marker[];
  onItemClick: (marker: Marker) => void;
  activeMarker?: Marker;
}

export const Sidebar: FC<SidebarProps> = ({markers, onItemClick, activeMarker}) => {
  const setSelectedItem = (marker: Marker) => () => {
    onItemClick(marker);
  }
  
  const sidebarContent = markers.map(marker => (
    <SidebarItem 
      isActive={marker === activeMarker}
      key={marker.name}
      onClick={setSelectedItem(marker)}
      onMouseEnter={setSelectedItem(marker)}
    >
      {marker.sidebarImgSrc && <img src={marker.sidebarImgSrc} />}
      <SidebarItemName>{marker.name}</SidebarItemName>
    </SidebarItem>
  ))

  return (
    <SidebarWrapper>
      {sidebarContent}
    </SidebarWrapper>
  )
}