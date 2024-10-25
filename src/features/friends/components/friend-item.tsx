import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getInitials } from "@/utils/helper-funcs"

interface FriendItemsProps {
   username: string | null
   points: number | null
   lastName: string | null
   firstName: string  | null
   photoUrl?: string  
}

export const FriendItems = ({ username, points, photoUrl, firstName, lastName }: FriendItemsProps) => {
   return (<>
      <div className="flex justify-between items-center">
         <div className="flex gap-3 items-center">
            <Avatar className="w-10 h-10 text-black">
               <AvatarImage src={photoUrl} />
               <AvatarFallback className="text-[14px] font-bold">{getInitials(firstName, lastName)}</AvatarFallback>
            </Avatar>
            <p className="text-base">{username}</p>
         </div>
         <div className="text-base font-bold">
            {points} WP
         </div>
      </div>
   </>)
}