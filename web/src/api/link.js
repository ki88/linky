import request from './request';

export const linkApi = {
  getAll: () => request({
    url: `links`
  }),

  getStats: (sid) => request({
    url: `links/${sid}/stats`
  }),

  create: (url) => request({
    method: 'post',
    url: `links`,
    data: {
      url
    }
  }),
};
