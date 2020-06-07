import * as React from 'react';
import {FC, useState} from 'react';
import GoogleMapReact from 'google-map-react';
import { MapWrapper, ContentWrapper } from './styled';
import {Marker} from './marker';
import {Sidebar} from './sidebar';
import { MapMarketerProps, Marker as MarkerType } from './types';

export const MapMarketer: FC<MapMarketerProps> = ({gmapProps, markers}) => {
  const [activeMarker, setActiveMarker] = useState<MarkerType | undefined>()
  const onMarkerHover = (marker: MarkerType) => () => {
    setActiveMarker(marker);
  }
  const markersContent = markers.map((marker) => (
    <Marker 
      key={marker.name}
      onMarkerHover={onMarkerHover(marker)}
      isFocused={activeMarker === marker}
      {...marker} 
    />
  ));
  const onItemClick = (marker: MarkerType) => {
    setActiveMarker(marker);
  };

  return (
    <ContentWrapper>
      <MapWrapper>
        <GoogleMapReact
          {...gmapProps}
          options={{
            clickableIcons: false
          }}
        >
          {markersContent}
        </GoogleMapReact>
      </MapWrapper>
      <Sidebar
        markers={markers}
        onItemClick={onItemClick}
        activeMarker={activeMarker}
      />
    </ContentWrapper>
  )
}