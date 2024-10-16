import Avatar from "@/assets/icons/avatar.svg"
import Logo2 from "@/assets/icons/logo2-white.svg"

interface HomeProps {
   username?: string
}

export const HomeComponent = ({ username }: HomeProps) => {
   return (
      <div>
         <div className=" flex justify-center items-center w-full mt-[80px]">
            <p className="text-center py-1 px-2 border border-slate-800 rounded-md bg-slate-800 max-w-[80%]">Click icon to take order</p>
         </div>
         <div className="flex flex-col justify-center items-center mt-[30px]">
            <div className="border p-3 rounded-full bg-gray-200 border-gray-200">
               <img src={Avatar} alt="avatar" />
            </div>
            <h3 className="text-[38px] font-bold text-gray-400 mt-[15px]">{username}</h3>

            <div className="text-[40px] font-bold mt-[10px]">58,425 WP</div> // animate the change in number
         </div>


         <div className="mt-[70px] relative">
            <div className="flex w-full h-[70px] bg-secondary items-center justify-end px-5 rounded-2xl absolute z-0">
               <p>00h 00m</p>  // to animate
            </div>
            <div className="flex w-[75%] h-[70px] bg-primary items-center justify-between px-5 rounded-2xl relative z-4">
               <img src={Logo2} alt="logo2" />
               <p className="py-0.5 px-3 bg-slate-800 rounded-md text-[12px]">Seller is active</p>
               <p className="text-black">00.00</p> // animate
            </div>
         </div>

      </div>
   )
}