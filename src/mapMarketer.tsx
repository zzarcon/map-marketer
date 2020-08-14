import * as React from 'react';
import {FC, useState} from 'react';
import GoogleMapReact from 'google-map-react';
import { Blanket } from 'react-blanket';
import { MapWrapper, ContentWrapper, CurrentLocationPin, BlanketContent } from './styled';
import {Marker} from './marker';
import {Sidebar} from './sidebar';
import { MapMarketerProps, Marker as MarkerType } from './types';
import { useCurrentLocation } from './useCurrentLocation';

export const MapMarketer: FC<MapMarketerProps> = ({gmapProps, markers, detailsRender, fullScreenRender}) => {
  const currentLocation = useCurrentLocation();
  const [activeMarker, setActiveMarker] = useState<MarkerType | undefined>()
  const [isBlanketVisible, setBlanketVisible] = useState(false);
  const onMarkerHover = (marker: MarkerType) => () => {
    setActiveMarker(marker);
  }
  const hideBlanket = () => setBlanketVisible(false);
  const onMarkerClick = () => () => {
    setBlanketVisible(true)
  }
  const markersContent = markers.map((marker) => (
    <Marker 
      key={marker.name}
      onMarkerHover={onMarkerHover(marker)}
      isFocused={activeMarker === marker}
      onClick={onMarkerClick()}
      detailsRender={detailsRender}
      {...marker} 
    />
  ));
  const onItemClick = (marker: MarkerType) => {
    setActiveMarker(marker);
  };
  const currentLocationMarker = currentLocation && (
    <CurrentLocationPin 
      key="current-location"
      lat={currentLocation.latitude}
      lng={currentLocation.longitude}
    />
  );

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
          {currentLocationMarker}
        </GoogleMapReact>
      </MapWrapper>
      <Sidebar
        markers={markers}
        onItemClick={onItemClick}
        activeMarker={activeMarker}
      />
      {isBlanketVisible && activeMarker && fullScreenRender && (
        <Blanket onClose={hideBlanket}>
          <BlanketContent>
            {fullScreenRender(activeMarker)}
          </BlanketContent>
        </Blanket>
      )}
    </ContentWrapper>
  )
}