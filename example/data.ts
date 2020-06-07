import { Marker } from "../src";

const getAssetUrl = (path: string): string => `/assets/${path}`;

export const markers: Marker[] = [{
  lat: -33.867388,
  lng: 151.205229,
  imgSrc: 'st_dreux_logo.jpg',
  name: 'St.Dreux Coffee Roasters',
  instagram: 'st.dreuxcoffee',
  website: 'https://saintdreux.com'
}, {
  lat: -33.881142,
  lng: 151.209654,
  imgSrc: 'single_o_logo.jpg',
  name: 'Single O Surry Hills',
  instagram: 'single_o',
  website: 'https://singleo.com'
}, {
  lat: -33.868604,
  lng: 151.204801,
  imgSrc: 'skittle_lane_logo.jpg',
  name: 'Skittle Lane',
  instagram: 'skittlelanecoffee',
  website: 'https://skittlelane.com'
}, {
  lat: -33.879383,
  lng: 151.211142,
  imgSrc: 'pcp_logo.jpg',
  name: 'Paramount Coffee Project',
  instagram: 'pcpsydney',
  website: 'http://www.paramountcoffeeproject.com.au'
}, {
  lat: -33.868574,
  lng: 151.204188,
  imgSrc: 'kent_st_fare_logo.jpg',
  name: 'Kent Street Fare',
  instagram: 'kentstreetfare',
  website: 'https://saintdreux.com'
}, {
  lat: -33.864960,
  lng: 151.205922,
  imgSrc: 'bonnie_logo.jpg',
  name: 'Bonnie Coffee.',
  instagram: 'bonniecoffeeco',
  website: 'http://bonnie.coffee'
}, {
  lat: -33.869326,
  lng: 151.206200,
  imgSrc: 'industry_beans_logo.jpg',
  name: 'Industry Beans York St',
  instagram: '',
  website: 'https://industrybeans.com/pages/york-st-sydney'
}, {
  lat: -33.869645,
  lng: 151.206037,
  imgSrc: 'single_o_logo.jpg',
  name: 'Single O CBD',
  instagram: 'single_o',
  website: 'https://singleo.com'
}, {
  lat: -33.868029,
  lng: 151.205094,
  imgSrc: 'cross_eatery_logo.png',
  name: 'Cross Eatery',
  instagram: 'crosseatery',
  website: 'https://www.instagram.com/crosseatery'
}, {
  lat: -33.868749, 
  lng: 151.205789,
  imgSrc: 'mecca_logo.png',
  name: 'Mecca Coffee - King Street',
  instagram: 'meccacoffee',
  website: 'http://mecca.coffee'
}, {
  lat: -33.863781,
  lng: 151.201897,
  imgSrc: 'south_coffee_co_logo.jpg',
  name: 'South Coffee & Food',
  instagram: 'south.coffee.food',
  website: 'http://www.southcoffeefood.com.au/'
}].map(cafe => ({...cafe, imgSrc: getAssetUrl(cafe.imgSrc)}))