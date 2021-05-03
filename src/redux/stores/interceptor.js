/* eslint-disable no-unreachable */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import axios from 'axios';
// TODO
// import router from './router/router';

// LocalstorageService

export const interceptor = () => {
  // Add a request interceptor
  const axiosInstance = axios.create({
    baseURL: 'http://18.193.84.46'
  });
  axiosInstance.interceptors.request.use(
    config => {
      config.headers['Access-Control-Allow-Headers'] =
        'Origin, Content-Type, Accept';
      config.headers['Access-Control-Allow-Origin'] = '*';
      config.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS';
      config.headers['Access-Control-Allow-Credentials'] = 'true';
      return config;
    },
    error => {
      Promise.reject(error);
    }
  );

  // Add a response interceptor

  // axiosInstance.interceptors.response.use(
  //   response => {
  //     return response;
  //   },
  //   error => {
  //     const originalRequest = error.config;

  //     // if (
  //     //   !error.response ||
  //     //   (error.response.status === 401 &&
  //     //     !originalRequest._retry &&
  //     //     originalRequest.url !== '/user/login')
  //     // ) {
  //     //   originalRequest._retry = true;
  //     //   return axiosInstance
  //     //     .post('user/refreshtoken', {
  //     //       refreshtoken,
  //     //       token
  //     //     })
  //     //     .then(res => {
  //     //       if (res.status === 201) {
  //     //         localStorageService.setToken(res.data);
  //     //         axios.defaults.headers.common.Authorization = `Bearer ${localStorageService.getAccessToken()}`;
  //     //         return axios(originalRequest);
  //     //       }

  //     //       return null;
  //     //     });
  //     // }
  //     return Promise.reject(error);
  //   }
  // );
  return axiosInstance;
};
