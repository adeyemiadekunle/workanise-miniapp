import { CustomDrawer } from "@/components/ui/drawer"
import OPS from "@/assets/icons/ops.gif"
import Congrat from "@/assets/icons/congrats.gif"
import Cone from "@/assets/icons/cone.gif"
import { FaXmark, FaQrcode } from "react-icons/fa6";



interface TipsProps {
   open: boolean,
   setClose?: (open: boolean) => void,
   reward: number
}

export const Tips = ({ open, setClose, reward }: TipsProps) => {


   return (
      <CustomDrawer
         open={open}
         openChange={() => setClose?.(false)}
         footer={<> <div className="mx-auto mt-4 h-1 w-[100px] rounded-full bg-muted" /></>}
      >
         <div>
            <div className="flex justify-between">
               <div className="border p-2 rounded-full bg-slate-800 border-slate-800"><FaQrcode size={23} /></div>
               <div className="border p-2 rounded-full bg-slate-800 border-slate-800" onClick={() => setClose?.(false)}><FaXmark size={24} /></div>
            </div>

            <div className="flex flex-col justify-center items-center mt-[40px] w-full">
               {reward > 0 ? (
                  <>
                     <div className="relative flex flex-col justify-center items-center w-full">
                        <img src={Congrat} alt="ops" width='100%' className="absolute z-0" />
                        <img src={Cone} alt="ops" width='70%' className="relative z-10" />
                     </div>
                     <h3 className="text-[26px] font-bold">Congratulations</h3>
                     <div className="w-full h-[2px] bg-slate-500 my-3" />
                     <p className="text-center text-[14px] text-gray-400">Tip Reward have been added to your
                        Account.
                        Complete 3 or more consecutive sessions
                        for your next Tips Rewards.</p>
                  </>
               ) : (
                  <>
                     <img src={OPS} alt="ops" width='70%' />
                     <h3 className="text-[26px] font-bold">Oops</h3>
                     <div className="w-full h-[2px] bg-slate-500 my-3" />
                     <p className="text-center text-[14px] text-gray-400">You are not eligible for Tips as you skipped a
                        day, try again later, complete 5 consecutive
                        days to become eligible</p>
                  </>
               )}
            </div>
         </div>
      </CustomDrawer>)
}  