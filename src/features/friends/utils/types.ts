import { ApiResponse } from "@/utils/api-types";

interface Referral {
  id: string;
  telegramId: string;
  username: string | null;
  firstName: string | null;
  lastName: string | null;
  photoUrl: string | null;
  referralCode?: string;
  role?: string;
  miningRate: number;
  lastSessionEnd: string | null;
  missedSession: string | null;
  createdAt: string;
  updatedAt: string;
  balance: number;
}

export interface Referrals {
  referrals: Referral[];
}

export type ReferralAPIResponse = ApiResponse<Referrals>;
