import * as React from 'react';
import {ReactNode} from 'react';
import {AppWrapper, MapWrapper, GlobalStyles} from './styled';
import { MapMarketer, useCurrentLocation, Marker } from '../src';
import {key} from './secret';
import {markers} from './data';
import { detailsRender } from './detailsRender';

const fullScreenRender = (marker: Marker): ReactNode => {
  return (
    <div>
      Full screen :)
      <div>
        {marker.name}
      </div>
    </div>
  )
}

const App = () => {
  const currentLocation = useCurrentLocation();
  const defaultCenter = currentLocation ? {
    lat: currentLocation.latitude,
    lng: currentLocation.longitude
  } : {
    lat: -33.869467,
    lng: 151.207363
  };

  const map = currentLocation ? (
    <MapWrapper>
      <MapMarketer
        gmapProps={{
          bootstrapURLKeys: {key},
          defaultCenter,
          defaultZoom: 15
        }}
        markers={markers}
        detailsRender={detailsRender}
        fullScreenRender={fullScreenRender}
      />
    </MapWrapper>
  ) : (
    <div>
      Loading....
    </div>
  )

  return (
    <AppWrapper>
      <GlobalStyles />
      {map}
    </AppWrapper>
  )
}

export default App