import { CustomDrawer } from "@/components/ui/drawer"
import QRcode from "@/assets/icons/qrcode.svg"
import { Button } from "@/components/ui/button"

interface InviteProps {
   open: boolean,
   setClose?: (open: boolean) => void,

}

export const InviteLayer = ({ open, setClose }: InviteProps) => {
   return (
      <CustomDrawer
         open={open}
         openChange={() => setClose?.(false)}
         footer={<div onClick={() => setClose?.(false)} className="text-center">Close</div>}
      >
         <div className="mt-4" >
            <h3 className="text-center">Invite Friend</h3>

            <div className="flex flex-col items-center justify-center mt-[70px]">
               <img src={QRcode} alt="qrcode" />
            </div>

            <div className="flex flex-col space-y-8 mt-10">
               <Button variant='secondary' size='lg'>Invite</Button>
               <Button variant='secondary' size='lg'>Copy Link</Button>
            </div>
         </div>

      </CustomDrawer>)
}