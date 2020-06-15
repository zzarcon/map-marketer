import * as React from 'react';
import {ReactNode} from 'react';
import { Marker } from '../src';

export const detailsRender = (marker: Marker): ReactNode => {
  return (
    <div>
      {marker.lat}
    </div>
  )
}