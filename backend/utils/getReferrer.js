import url from 'url';

function getReferrer(req) {
  const refUrl = req.headers.referer;

  if (!refUrl) {
    return '';
  }

  return url.parse(refUrl).hostname;
}

export default getReferrer;
