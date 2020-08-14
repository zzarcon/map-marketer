import {ReactNode} from 'react';
import {Props as GmapProps} from 'google-map-react';

export interface Marker {
  lat: number;
  lng: number;
  name: string;
  pinSrc: string;
  images: string[];
  sidebarImgSrc?: string;
  [key: string]: any;
}

export interface MapMarketerProps {
  gmapProps: GmapProps;
  markers: Marker[];
  detailsRender?: (marker: Marker) => ReactNode;
  fullScreenRender?: (marker: Marker) => ReactNode;
}
