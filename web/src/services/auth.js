import jwt from 'jsonwebtoken';

const KEY = 'token';

const auth = {
  login: token => {
    localStorage.setItem(KEY, token);
  },

  logOut: () => {
    localStorage.removeItem(KEY);
  },

  get token() {
    return localStorage.getItem(KEY);
  },

  get isAuthenticated() {
    const token = localStorage.getItem(KEY);
    if (!token) {
      return false;
    }
    const payload = jwt.decode(token);
    if (!payload || payload.exp * 1000 < new Date()) {
      localStorage.removeItem(KEY);
      return false;
    }
    return true;
  },

  get user() {
    const token = localStorage.getItem(KEY);
    if (!token) {
      return null;
    }
    const {user: {tokeetToken, ...user}} = jwt.decode(token);
    return user;
  }
};

export default auth;
