import {calcStats} from './calcStats';

const links = [
  {
    stats: {
      total: 4,
      byCountry: {
        RU: 4
      },
      byReferrer: {
        direct: 2,
        'yandex.ru': 2
      }
    },
    url: 'https://www.google.com/?q=beer',
    sid: 'kDumUaKG',
    user: 'ilya',
    created: 1579849631
  },
  {
    stats: {
      total: 0,
      byCountry: {},
      byReferrer: {}
    },
    url: 'https://www.google.com/?q=dogs',
    sid: 'kLFhFyXk',
    user: 'ilya',
    created: 1579849456
  },
  {
    stats: {
      total: 0,
      byCountry: {},
      byReferrer: {}
    },
    url: 'https://www.google.com/?q=cats',
    sid: 'rE09boSS',
    user: 'ilya',
    created: 1579849442
  }
];

const result = {
  total: 4,
  country: {
    code: 'RU',
    clicks: 4
  },
  referrer: {
    name: 'direct',
    clicks: 2
  }
};

describe('calStats', () => {
  it('should call onDetails', async () => {
    expect(calcStats(links)).toEqual(result);
  });
});
