import axios from 'axios';
import auth from '../services/auth';

const baseUrl = process.env.REACT_APP_API_BASE_URL;

const request = async data => {
  try {
    const resp = await axios({
      ...data,
      url: `${baseUrl}/api/${data.url}`,
      headers: {
        Authorization: auth.token
      }
    });
    return resp.data;
  } catch (e) {
    if (!e.response) {
      throw e;
    }
    if (e.response.data && e.response.data.code === 'ACCESS_FORBIDDEN') {
      window.location.href = '/login';
    }
    throw e.response.data;
  }
};

export default request;
