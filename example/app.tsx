import * as React from 'react';
import {AppWrapper, MapWrapper, GlobalStyles} from './styled';
import { MapMarketer, useCurrentLocation } from '../src';
import {key} from './secret';
import {markers} from './data';

const App = () => {
  const currentLocation = useCurrentLocation();
  const map = currentLocation ? (
    <MapWrapper>
      <MapMarketer
        gmapProps={{
          bootstrapURLKeys: {key},
          defaultCenter: {
            lat: currentLocation.latitude,
            lng: currentLocation.longitude
          },
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