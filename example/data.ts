import { Marker } from "../src";

const getAssetUrl = (path: string): string => `/assets/${path}`;

export const markers: Marker[] = [{
  imgSrc: 'pin_icon2.png',
  lat: -33.888384,
  lng: 151.202990,
  name: 'Prince Alfred main park'
}, {
  imgSrc: 'pin_icon2.png',
  lat: -33.888526,
  lng: 151.203434,
  name: 'Prince Alfred secondary park'
}, {
  imgSrc: 'pin_icon2.png',
  lat: -33.887339,
  lng: 151.204884,
  name: 'Prince Alfred small park'
}].map(marker => ({...marker, imgSrc: getAssetUrl(marker.imgSrc)}));
