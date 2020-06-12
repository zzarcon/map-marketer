import * as React from 'react';
import {FC} from 'react';
import {MarkerWrapper, pinClassName} from './styled';

interface MarkerProps {
  lat: number;
  lng: number;
  pinSrc: string;
  name: string;
  onMarkerHover?: () => void;
  isFocused?: boolean;
  onClick?: () => void;
}

// TODO: default to pin image if pinSrc is not defined
export const Marker: FC<MarkerProps> = ({pinSrc, onClick, isFocused, onMarkerHover}) => {
  return (
    <MarkerWrapper onClick={onClick} onMouseEnter={onMarkerHover} isFocused={isFocused} className={pinClassName}>
      <img src={pinSrc} />
    </MarkerWrapper>
  )
}
