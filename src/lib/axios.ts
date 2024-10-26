import Axios from "axios";
import { logout } from "@/utils/helper-funcs";
import { fetchLocalUserData, storeLocalUserData } from "./local-storage";
import { retrieveLaunchParams } from "@telegram-apps/sdk";

const baseURL = import.meta.env.VITE_APP_API_BASE_URL as string;
const version = "/api/v1";

// Simple Axios instance for login
export const loginApi = Axios.create({
  baseURL: `${baseURL}${version}`,
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// Add a request interceptor to include the InitData
loginApi.interceptors.request.use(
  (config) => {
    // Get the InitData from the Telegram Web App
    const { initDataRaw } = retrieveLaunchParams();

    // Add the InitData to the headers
    if (initDataRaw) {
      config.headers["Authorization"] = `TelegramWebAppData ${initDataRaw}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle the response
loginApi.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error?.response?.data || error?.response || error)
);

// Authenticated API instance
export const api = Axios.create({
  baseURL: `${baseURL}${version}`,
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

async function refreshAccessToken() {
  const { refreshToken } = fetchLocalUserData();

  if (!refreshToken) {
    throw new Error("No refresh token available");
  }

  const response = await Axios.post(`${baseURL}${version}/auth/refresh`, null, {
	headers: { Authorization: `Bearer ${refreshToken}` },
})


  const newAccessToken = response.data.data?.accessToken;
  const newRefreshToken = response.data.data?.refreshToken;

  if (newAccessToken && newRefreshToken) {
    const userData = fetchLocalUserData();
    userData.accessToken = newAccessToken;
    userData.refreshToken = newRefreshToken;
    storeLocalUserData(userData);

    return newAccessToken;
  } 
  else logout();
}

api.interceptors.request.use(
  async (config) => {
    const { accessToken } = fetchLocalUserData();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error?.response?.data || error?.response || error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response?.data || response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 ||
      (error.response.status === 403 && !originalRequest._retry)
    ) {
      originalRequest._retry = true;
      try {
        const newAccessToken = await refreshAccessToken();
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${newAccessToken}`;
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        logout();
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error?.response?.data || error?.response || error);
  }
);
