import { ApiResponse } from "@/utils/api-types";

export interface Referrals {
  referral: {
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
  };
}

export type ReferralAPIResponse = ApiResponse<Referrals[]>;
