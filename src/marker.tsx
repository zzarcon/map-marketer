import * as React from 'react';
import {FC} from 'react';
import {MarkerWrapper} from './styled';

interface MarkerProps {
  lat: number;
  lng: number;
  imgSrc: string;
  isFocused?: boolean;
  onClick?: () => void;
}

export const Marker: FC<MarkerProps> = ({imgSrc, onClick}) => {
  return (
    <MarkerWrapper onClick={onClick}>
      <img src={imgSrc} />
    </MarkerWrapper>
  )
}
