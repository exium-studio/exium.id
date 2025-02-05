import { IMAGES_PATH } from "./path";

const MAP_STYLES = [
  {
    key: "standard",
    label: "Standar (3D)",
    light: {
      img: `${IMAGES_PATH}/map_styles/standard_light.webp`,
      style: "mapbox://styles/mapbox/standard",
    },
    dark: {
      img: `${IMAGES_PATH}/map_styles/standard_dark.webp`,
      style: "mapbox://styles/mapbox/standard",
    },
  },
  {
    key: "monokrom",
    label: "Monokrom",
    light: {
      img: `${IMAGES_PATH}/map_styles/monokrom_light.webp`,
      style: `mapbox://styles/mapbox/light-v11`,
    },
    dark: {
      img: `${IMAGES_PATH}/map_styles/monokrom_dark.webp`,
      style: `mapbox://styles/mapbox/dark-v11`,
    },
  },
  {
    key: "streets",
    label: "Streets",
    light: {
      img: `${IMAGES_PATH}/map_styles/streets.webp`,
      style: `mapbox://styles/mapbox/streets-v12`,
    },
    dark: {
      img: `${IMAGES_PATH}/map_styles/streets.webp`,
      style: `mapbox://styles/mapbox/streets-v12`,
    },
  },
  {
    key: "outdoors",
    label: "Outdoors",
    light: {
      img: `${IMAGES_PATH}/map_styles/outdoors.webp`,
      style: `mapbox://styles/mapbox/outdoors-v12`,
    },
    dark: {
      img: `${IMAGES_PATH}/map_styles/outdoors.webp`,
      style: `mapbox://styles/mapbox/outdoors-v12`,
    },
  },
  {
    key: "satellite",
    label: "Satellite",
    light: {
      img: `${IMAGES_PATH}/map_styles/standard_satellite.webp`,
      style: `mapbox://styles/mapbox/standard-satellite`,
    },
    dark: {
      img: `${IMAGES_PATH}/map_styles/standard_satellite.webp`,
      style: `mapbox://styles/mapbox/standard-satellite`,
    },
  },
];

export default MAP_STYLES;
