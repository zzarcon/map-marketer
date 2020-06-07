import {useEffect, useState} from 'react';

export const useCurrentLocation = (): Coordinates | undefined => {
  const [currentLocation, setCurrentLocation] = useState<Coordinates | undefined>(undefined);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentLocation(position.coords);
    }, () => {
      // TODO: handle location error
    })
  });
  
  return currentLocation;
}