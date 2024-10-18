import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import AvatarPlaceHolder from "@/assets/icons/avatar-image.svg"
import { Button } from "@/components/ui/button"
import { FriendItems } from "./friend-item"
import { FaUser } from "react-icons/fa6"

interface FriendProps {
   openInvite: () => void
}

export const Friend = ({ openInvite }: FriendProps) => {

   const datas = [
      {
         firstName: "Eden",
         lastName: "Wright",
         username: "EdenW",
         referralpoints: "200",
      },

      {
         firstName: "Adams",
         lastName: "Bowell",
         username: "Bowell",
         referralpoints: "200",
      },
      {
         firstName: "Adams",
         lastName: "Bowell",
         username: "Bowell",
         referralpoints: "200",
      },

   ]


   return (<>
      <div>
         <div className="pt-3 flex items-center flex-col justify-center space-y-5">
            <Avatar className=" w-28 h-28 text-black">
               <AvatarImage src={AvatarPlaceHolder} />
               <AvatarFallback className="text-2xl">CN</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl font-bold text-center my-5 w-3/4">
               WUSD 0
            </h1>

            <Button variant='default' size='lg' className="rounded-full w-[60%] text-xl font-bold">Claim</Button>
         </div>

         <div className="mt-[30px] mb-[20px]">
            <p className="font-bold text-xl"> 3 Friends</p>
         </div>

         <div className="space-y-6 overflow-y-auto h-40">
            {
               datas.map((data) => {
                  return (
                     <FriendItems
                        username={data.username}
                        firstName={data.firstName}
                        lastName={data.lastName}
                        points={data.referralpoints}
                     />
                  )
               })
            }
         </div>

         <div className="pt-6">
            <Button
               onClick={() => openInvite()}
               variant='secondary' size='lg'> <FaUser size={18} className="mr-2" />Invite</Button>
         </div>
      </div>
   </>)
}