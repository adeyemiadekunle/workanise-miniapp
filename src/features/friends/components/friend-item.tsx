import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getInitials } from "@/utils/helper-funcs"

interface FriendItemsProps {
   username?: string
   points?: string
   lastName: string
   firstName: string
   photoUrl?: string
}

export const FriendItems = ({ username, points, photoUrl, firstName, lastName }: FriendItemsProps) => {
   return (<>
      <div className="flex justify-between items-center">
         <div className="flex gap-3 items-center">
            <Avatar className="w-12 h-12 text-black">
               <AvatarImage src={photoUrl} />
               <AvatarFallback className="text-[16px] font-bold">{getInitials(firstName, lastName)}</AvatarFallback>
            </Avatar>
            <p className="text-xl">{username}</p>
         </div>
         <div className="text-xl font-bold">
            {points} WP
         </div>
      </div>
   </>)
}