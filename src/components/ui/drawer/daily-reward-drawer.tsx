
// import { Button } from "@/components/ui/button"
import { cn } from '@/utils/helper-funcs'
import {
   Drawer,
   DrawerContent,
} from "./drawer"

export interface CustomDrawerProps {
   open?: boolean,
   children?: React.ReactNode,
   openChange?: (open: boolean) => void,
   trigger?: React.ReactNode
   title?: React.ReactNode
   closeText?: string,
   dhClassName?: string
}

export function DailyCustomDrawer({
   // trigger,
   children,
   open,
   openChange,
   dhClassName
}: CustomDrawerProps) {

   return (
      <Drawer
         open={open}
         onOpenChange={openChange}

      >
         <DrawerContent
            className={cn('h-[100%] bg-black rounded-t-[0px]', dhClassName)}>
            {children && (
               <div className='mx-auto w-full h-full p-5'>
                  {children}
               </div>
            )}

         </DrawerContent>
      </Drawer>
   )
}

{/* <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" /> */ }