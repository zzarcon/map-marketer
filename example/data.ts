import { Marker } from "../src";
import {detailsRender} from './detailsRender';

const getAssetUrl = (path: string): string => `/assets/${path}`;

export const markers: Marker[] = [{
  pinSrc: 'pin_icon2.png',
  lat: -33.8918086,
  lng: 151.1996371,
  name: 'Best park',
  images: [
    'prince_alfred_park_bars.jpg',
    'prince_alfred_park_pano.jpg',
    'prince_alfred_park.jpg'
  ],
  detailsRender
}, {
  pinSrc: 'pin_icon2.png',
  lat: -33.888384,
  lng: 151.202990,
  name: 'Prince Alfred main park',
  images: [
    'prince_alfred_park_bars.jpg',
    'prince_alfred_park_pano.jpg',
    'prince_alfred_park.jpg'
  ],
  detailsRender
}, {
  pinSrc: 'pin_icon2.png',
  lat: -33.888526,
  lng: 151.203434,
  name: 'Prince Alfred secondary park',
  images: [
    'prince_alfred_secondary_2.jpg',
    'prince_alfred_secondary.jpg',

  ],
  detailsRender
}, {
  pinSrc: 'pin_icon2.png',
  lat: -33.887339,
  lng: 151.204884,
  name: 'Prince Alfred small park',
  images: [
    'prince_alfred_park_small.jpg',
    'Prince-Albert-Park-Surry-Hills-144358.jpg'
  ],
  detailsRender
}].map(marker => ({
  ...marker,
  pinSrc: getAssetUrl(marker.pinSrc),
  images: marker.images.map(image => getAssetUrl(image))
}));
