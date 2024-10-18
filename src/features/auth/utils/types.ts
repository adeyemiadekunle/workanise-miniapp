import { UserType } from "@/types"

export interface LoginResponseType {
   message: string
   data: {
      user: UserType,
      accessToken: string
      refreshToken: string
   }
}