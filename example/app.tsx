import * as React from 'react';
import {AppWrapper, MapWrapper, GlobalStyles} from './styled';
import { MapMarketer, useCurrentLocation } from '../src';
import {key} from './secret';
import {markers} from './data';

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