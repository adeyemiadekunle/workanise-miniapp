import { ApiResponse } from "@/utils/api-types";

export interface UserType {
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

export interface User {
  user: {
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
    referralRewardPoint?: number
  };
}

export type UserAPIResponse = ApiResponse<User>;

export interface StateType {
  user: UserType | null;
  accessToken: string;
  refreshToken: string;
}

export enum ActionEnums {
  SAVE_TO_STATE = "SAVE_TO_STATE",
  CLEAR_STATE = "CLEAR_STATE",
}

export interface ActionType {
  type: ActionEnums;
  payload?: StateType;
}

export type AppContextType = {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
};
