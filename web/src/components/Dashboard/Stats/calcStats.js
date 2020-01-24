export function calcStats(links) {
  const total = links.reduce((res, link) => res + link.stats.total, 0);

  const byCountry = links.reduce((res, link) => {
    Object.keys(link.stats.byCountry).forEach(code => {
      const clicks = link.stats.byCountry[code];
      res[code] = (res[code] || 0) + clicks;
    });
    return res;
  }, {});
  const topCountry = Object.keys(byCountry).sort((a, b) => byCountry[b] - byCountry[a])[0];

  const byReferrer = links.reduce((res, link) => {
    Object.keys(link.stats.byReferrer).forEach(code => {
      const clicks = link.stats.byReferrer[code];
      res[code] = (res[code] || 0) + clicks;
    });
    return res;
  }, {});
  const topReferrer = Object.keys(byReferrer).sort((a, b) => byReferrer[b] - byReferrer[a])[0];

  return {
    total,
    country: {
      code: topCountry || '-',
      clicks: byCountry[topCountry] || 0
    },
    referrer: {
      name: topReferrer,
      clicks: byReferrer[topReferrer]
    }
  }
}
