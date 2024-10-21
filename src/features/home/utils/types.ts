import { UserType } from "@/types";
import { ApiResponse } from "@/utils/api-types";

interface sessionStatus {
  READY: "READY";
  ACTIVE: "ACTIVE";
  COMPLETED: "COMPLETED";
}

export interface Session {
  session: {
    id: string;
    userId: string;
    startTime: Date | null;
    endTime: Date | null;
    earnedPoints: number;
    active: boolean;
    status: sessionStatus;
    createdAt: Date;
    claimed: boolean;
    updatedAt: Date;
    remainingTimeSeconds: number;
    miningRate?: number;
    user: UserType;
  };
}

export type SessionAPIResponse = ApiResponse<Session>;
