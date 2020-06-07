import * as React from 'react';
import {FC} from 'react';
import { SidebarWrapper, SidebarItem } from './styled';
import { Marker } from './types';

export interface SidebarProps {
  markers: Marker[];
}

export const Sidebar: FC<SidebarProps> = ({markers}) => {
  const sidebarContent = markers.map(marker => (
    <SidebarItem key={marker.name}>
      <img src={marker.imgSrc} />
      {marker.name}
    </SidebarItem>
  ))

  return (
    <SidebarWrapper>
      {sidebarContent}
    </SidebarWrapper>
  )
}