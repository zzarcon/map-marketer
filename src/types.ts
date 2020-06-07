import {Props as GmapProps} from 'google-map-react';

export interface Marker {
  lat: number;
  lng: number;
  imgSrc: string;
  name: string;
  // TODO: allow to pass any other props
}

export interface MapMarketerProps {
  gmapProps: GmapProps;
  markers: Marker[];
}
