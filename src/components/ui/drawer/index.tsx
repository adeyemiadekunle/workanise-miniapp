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
   footer?: React.ReactNode
}

export function CustomDrawer({
   children,
   open,
   openChange,
   dhClassName,
   footer
}: CustomDrawerProps) {

   return (
      <Drawer
         open={open}
         onOpenChange={openChange}

      >
         <DrawerContent
            className={cn('h-[80%] bg-gray-900 flex flex-col mb-2', dhClassName)}>
            {children && (
               <div className='mx-auto w-full h-full p-5'>
                  {children}
               </div>
            )}



            <div>
               {footer}
            </div>
         </DrawerContent>

      </Drawer>
   )
}

{/* <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" /> */ }