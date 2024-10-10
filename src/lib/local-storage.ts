import CryptoJS from 'crypto-js';
import { StateType } from '@/types';
import { STORAGE_KEY } from '@/utils/constants';
import { initCloudStorage } from '@telegram-apps/sdk';

const cloudStorage = initCloudStorage();

const secretKey = import.meta.env.VITE_ENCRYPT_KEY;

export const fetchLocalUserData = async (storeKey = STORAGE_KEY, initialState = {}) => {
  try {
    // const userData = localStorage.getItem(storeKey);
    const userData = await cloudStorage.get(storeKey)
    if (userData) {
      const bytes = CryptoJS.AES.decrypt(userData, secretKey);
      const decryptedData = JSON.parse(bytes?.toString(CryptoJS.enc.Utf8));
      return decryptedData;
    }
    return initialState;
  } catch (error) {
    deleteLocalUserData(storeKey);
    console.log(error);
    return initialState;
  }
};

export const storeLocalUserData = async (userData: StateType, storeKey = STORAGE_KEY) => {
  const prevData = await fetchLocalUserData(storeKey);
  const data = JSON.stringify({ ...prevData, ...userData });
  const ciphertext = CryptoJS.AES.encrypt(data, secretKey).toString();
  try {
    // localStorage.setItem(storeKey, ciphertext);
    cloudStorage.set(storeKey, ciphertext)
  } catch (error) {
    console.log(error);
    throw new Error('Local storage permission is needed');
  }
};

export const deleteLocalUserData = (storeKey = STORAGE_KEY) => {
  try {
    // localStorage.removeItem(storeKey)
    cloudStorage.delete(storeKey)
  } catch (error) {
    console.log(error);
    throw new Error('Local storage permission is needed');
  }
};
