import * as React from 'react';
import {FC} from 'react';
import {MarkerWrapper, pinClassName} from './styled';

interface MarkerProps {
  lat: number;
  lng: number;
  imgSrc: string;
  onMarkerHover?: () => void;
  isFocused?: boolean;
  onClick?: () => void;
}

export const Marker: FC<MarkerProps> = ({imgSrc, onClick, isFocused, onMarkerHover}) => {
  return (
    <MarkerWrapper onClick={onClick} onMouseEnter={onMarkerHover} isFocused={isFocused} className={pinClassName}>
      <img src={imgSrc} />
    </MarkerWrapper>
  )
}
