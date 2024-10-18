import CryptoJS from 'crypto-js';
import { StateType } from '@/types';
import { STORAGE_KEY } from '@/utils/constants';


// const cloudStorage = initCloudStorage();

const secretKey = import.meta.env.VITE_ENCRYPT_KEY;
if (!secretKey) {
  throw new Error('Encryption key (VITE_ENCRYPT_KEY) is not defined');
}

export const fetchLocalUserData =  (storeKey = STORAGE_KEY, initialState = {}) => {
  try {
    const userData = localStorage.getItem(storeKey);

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

export const storeLocalUserData = (userData: StateType, storeKey = STORAGE_KEY) => {
  const prevData = fetchLocalUserData(storeKey);
  const data = JSON.stringify({ ...prevData, ...userData });
  const ciphertext = CryptoJS.AES.encrypt(data, secretKey).toString();
  try {
    localStorage.setItem(storeKey, ciphertext);
  } catch (error) {
    console.log(error);
    throw new Error('Local storage permission is needed');
  }
};

export const deleteLocalUserData = (storeKey = STORAGE_KEY) => {
  try {
    localStorage.removeItem(storeKey)
  } catch (error) {
    console.log(error);
    throw new Error('Local storage permission is needed');
  }
};
