import { deleteLocalUserData } from '@/lib/local-storage';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const logout = () => {
  deleteLocalUserData();
  window.location.replace(`${window.location.origin}/auth/login`);
};


export function formatAmount(amount?: number | string): string {
  if (amount === undefined || amount === null) {
      return '';
  }

  const amountString = typeof amount === 'number' ? amount.toFixed(2) : amount;
  const parts = amountString.split('.');
  const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const decimalPart = parts[1];

  if (decimalPart === '00') {
      return integerPart;
  } else {
      return `${integerPart}.${decimalPart}`;
  }
}