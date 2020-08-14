import * as React from 'react';
import {FC, ReactNode} from 'react';
import {MarkerInfo, AdditionalInfoWrapper, MarkerImages, MarkerWrapper, pinClassName, MarkerDetail} from './styled';
import { Marker as MarkerInterface } from './types';

interface MarkerProps extends MarkerInterface {
  onMarkerHover?: () => void;
  isFocused?: boolean;
  onClick?: () => void;
  detailsRender?: (marker: MarkerInterface) => ReactNode;
}

interface MarkerDetailProps extends MarkerInterface {
  detailsRender?: (marker: MarkerInterface) => ReactNode;
}

const renderMarkerDetail = (props: MarkerDetailProps) => {
  const {name, images, detailsRender} = props;
  const imagesContent = images.map((image, key) => {
    return (
      <img key={key} src={image} alt="" />
    )
  });
  const additionalInfo = detailsRender ? (
    <AdditionalInfoWrapper>
      {detailsRender(props)}
    </AdditionalInfoWrapper>
  ) : null;

  return (
    <MarkerDetail>
      <MarkerImages>
        {imagesContent}
      </MarkerImages>
      <MarkerInfo>
        {name}
        {additionalInfo}
      </MarkerInfo>
    </MarkerDetail>
  )
}

// TODO: default to pin image if pinSrc is not defined
export const Marker: FC<MarkerProps> = (props) => {
  const {pinSrc, onClick, isFocused, onMarkerHover} = props;
  return (
    <MarkerWrapper onClick={onClick} onMouseEnter={onMarkerHover} isFocused={isFocused} className={pinClassName}>
      <img src={pinSrc} />
      {isFocused && renderMarkerDetail(props)}
    </MarkerWrapper>
  )
}
