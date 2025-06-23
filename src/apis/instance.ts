import API_URL from '@apis/env';
import MESSAGES from '@apis/messages';
import { getStorageValue } from '@hooks/useLocalStorage';
import axios, { isAxiosError } from 'axios';

// const API_URL = process.env.NEXT_PUBLIC_APP_BASE_URL as string;

// 토큰이 필요없는 api 요청
const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true, // 쿠키를 포함한 요청 허용
  headers: {
    'Content-Type': 'application/json',
  },
});

// 토큰이 필요한 api 요청
export const privateInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const postRefreshToken = async () => {
  try {
    const response = await axios.get(`${API_URL}/login/refresh`, {
      headers: {
        'Content-Type': 'application/json',
        refreshToken: getStorageValue('refreshToken'),
      },
      withCredentials: true,
    });
    return response;
  } catch (error) {
    if (isAxiosError(error)) throw error;
    else throw new Error(MESSAGES.UNKNOWN_ERROR);
  }
};

privateInstance.interceptors.response.use(
  (response) => response,

  async (error) => {
    if (!getStorageValue('Authorization')) {
      return Promise.reject(error);
    }

    const {
      config,
      response: { status },
    } = error;

    if (status === 401) {
      try {
        const response = await postRefreshToken();

        if (response.status === 200) {
          const originRequest = config;
          const newAuthorization = response.headers.authorization;
          const parsedToken = newAuthorization.split(' ')[1];
          localStorage.setItem('Authorization', parsedToken);

          axios.defaults.headers.common.Authorization = `Bearer ${parsedToken}`;
          originRequest.headers.Authorization = `Bearer ${parsedToken}`;

          return await axios(originRequest);
        }
      } catch (error) {
        localStorage.clear();
        console.error(error);
        alert(MESSAGES.EXPIRED);
        window.location.replace('/');
      }
    }
    return Promise.reject(error);
  },
);

// 로그인 상태에 따라 axios인스턴스 선택을 위한 훅
export const getAxiosInstance = () => {
  const isLoggedIn = !!getStorageValue('Authorization');
  return isLoggedIn ? privateInstance : instance;
};

export default instance;
