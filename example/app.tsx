import * as React from 'react';
import {GHCorner} from 'react-gh-corner';
import {AppWrapper, MapWrapper, GlobalStyles} from './styled';
import { MapMarketer } from '../src';
import {key} from './secret';
import {markers} from './data';

const repoUrl = 'https://github.com/map-marketer';

const App = () => {
  return (
    <AppWrapper>
      <GlobalStyles />
      <GHCorner openInNewTab href={repoUrl} />
      <MapWrapper>
        <MapMarketer
          gmapProps={{
            bootstrapURLKeys: {key},
            defaultCenter: {
              lat: -33.869467,
              lng: 151.207363
            },
            defaultZoom: 15
          }}
          markers={markers}
        />
      </MapWrapper>
    </AppWrapper>
  )
}

export default App