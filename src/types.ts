import {Props as GmapProps} from 'google-map-react';

export interface Marker {
  lat: number;
  lng: number;
  name: string;
  pinSrc: string;
  sidebarImgSrc?: string;
  // TODO: allow to pass any other props
}

export interface MapMarketerProps {
  gmapProps: GmapProps;
  markers: Marker[];
}
