import request from './request';

export const authApi = {
  login: data =>
    request({
      method: 'post',
      url: 'login',
      data
    })
};
