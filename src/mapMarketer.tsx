import * as React from 'react';
import {FC} from 'react';
import GoogleMapReact from 'google-map-react';
import { MapWrapper, ContentWrapper } from './styled';
import {Marker} from './marker';
import {Sidebar} from './sidebar';
import { MapMarketerProps } from './types';

export const MapMarketer: FC<MapMarketerProps> = ({gmapProps, markers}) => {
  const markersContent = markers.map((markerProps) => <Marker key={markerProps.name} {...markerProps} />);

  return (
    <ContentWrapper>
      <MapWrapper>
        <GoogleMapReact
          {...gmapProps}
        >
          {markersContent}
        </GoogleMapReact>
      </MapWrapper>
      <Sidebar
        markers={markers}
      />
    </ContentWrapper>
  )
}