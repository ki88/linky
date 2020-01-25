import { changeHue } from './changeHue';

const colors = ['#CFA3F0', '#68CEDD', '#F7939B', '#5CAEED', '#5F83A2'];

const cache = {};

export function getColor(i, name) {
  if (name && cache[name]) {
    return cache[name];
  }

  let color;
  if (i < colors.length) {
    color = colors[i];
  } else {
    color = changeHue('#68CEDD', (i - colors.length + 1) * 80);
  }

  if (name) {
    cache[name] = color;
  }

  return color;
}
