import { CustomDrawer } from "@/components/ui/drawer"


interface QuestProps {
   open: boolean,
   setClose?: (open: boolean) => void,

}

export const QuestLayer = ({ open, setClose }: QuestProps) => {
   return (
      <CustomDrawer
         open={open}
         openChange={() => setClose?.(false)}
         footer={<div onClick={() => setClose?.(false)} className="text-center">Close</div>}
      >
         

      </CustomDrawer>)
}