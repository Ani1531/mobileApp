import axios from 'axios';

const LOCAL_BASE_URL = 'http://10.68.60.81:4000';
const API_INSTANCE = axios.create({
  baseURL: LOCAL_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getUserCred = async url => {
  return await API_INSTANCE.get(`${url}`);
};
