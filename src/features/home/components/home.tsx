import Avatar from "@/assets/icons/avatar.svg"
import Logo2 from "@/assets/icons/logo2-white.svg"
import { useGetSession } from "../api/get-session";
import { usePostStartSession } from "../api/post-start-session";
import { useToast } from "@/hooks/ToastContext";
import { fetchLocalUserData } from "@/lib/local-storage";


interface HomeProps {
   username?: string
}

export const HomeComponent = ({ username }: HomeProps) => {
   const { user } = fetchLocalUserData() || {}

   // Check if user is defined before accessing user.id
   const { showToast } = useToast();
   const userId = user?.id; // Use optional chaining to safely access user.id

   const { data } = useGetSession({ userId }) // Pass userId, which may be undefined

   const { mutate } = usePostStartSession({
      mutationConfig: {
         onSuccess: () => {
         },
      },
      userId
   })

   const startSession = () => {
      try {
         mutate?.({ userId })
      } catch (error) {
         console.error("Error starting session:", error);
         showToast(`Error to start session ${error}`, 'error')
      }
   }

   console.log(data)


   return (
      <div className="flex flex-col items-center">
         <div className=" flex justify-center items-center w-full mt-[50px]">
            <p className="text-center py-1 px-2 border border-slate-800 rounded-md bg-slate-800 max-w-[80%] text-white">Click icon to take order</p>
         </div>
         <div className="flex flex-col justify-center items-center mt-[30px]">
            <div onClick={startSession} className="border p-3 rounded-full bg-secondary border-secondary">
               <img src={Avatar} alt="avatar" />
            </div>
            <h3 className="text-[32px] font-bold text-secondary mt-[15px]">{username}</h3>

            <div className="text-[40px] text-secondary font-bold mt-[10px]">58,425 WP</div>
            {/* animate the change in number */}
         </div>


         <div className="mt-[60px] relative w-[95%]">
            <div className="flex w-full h-[70px] bg-secondary items-center justify-end px-5 rounded-3xl absolute z-0">
               <p>00h 00m</p>
               {/* to animate */}
            </div>
            <div className="flex w-[75%] h-[70px] bg-secondary items-center justify-between px-5 rounded-3xl relative z-4">
               <img src={Logo2} alt="logo2" />
               <p className="py-0.5 px-3 bg-slate-800 rounded-md text-[12px] text-nowrap">Seller is active</p>
               <p className="text-black">00.00</p>
               {/* to animate */}
            </div>
         </div>

      </div>
   )
}
