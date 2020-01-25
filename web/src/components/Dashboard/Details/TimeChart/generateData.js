import moment from 'moment';

const defaultData = [0, -1, 2].map(i => ({
  t: +moment().add(i, 'days'),
  y: 0
}));

export function generateData(stat) {
  const data = stat.map(item => ({
    t: +moment.unix(item.time),
    y: 1
  }));
  return [...defaultData, ...data];
}
