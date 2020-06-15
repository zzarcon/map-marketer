import {ReactNode} from 'react';
import {Props as GmapProps} from 'google-map-react';

export interface Marker {
  lat: number;
  lng: number;
  name: string;
  pinSrc: string;
  images: string[];
  detailsRender?: (marker: Marker) => ReactNode;
  sidebarImgSrc?: string;
  [key: string]: any;
}

export interface MapMarketerProps {
  gmapProps: GmapProps;
  markers: Marker[];
}
