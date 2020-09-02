import * as React from 'react';
import {ReactNode} from 'react';
import {AppWrapper, MapWrapper, GlobalStyles} from './styled';
import { MapMarketer, Marker } from '../src';
import {key} from './secret';
import {markers} from './data';
import { detailsRender } from './detailsRender';

const fullScreenRender = (marker: Marker, hideBlanket: () => void): ReactNode => {
  return (
    <div>
      Full screen :)
      <div>
        {marker.name}
      </div>
      <button onClick={hideBlanket}>Close</button>
    </div>
  )
}

const App = () => {
  const defaultCenter = {
    lat: -33.869467,
    lng: 151.207363
  };

  const map = (
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
  )

  return (
    <AppWrapper>
      <GlobalStyles />
      {map}
    </AppWrapper>
  )
}

export default App