import { FaYoutube } from "react-icons/fa6";

interface TaskItemProps {
   title?: string,
   reward?: number,
   // action?: () => void,
   action?: string
}


export function TaskItem({ title, reward, action, }: TaskItemProps) {
   return (
      <div className="flex items-center justify-between">
         <div className="flex items-center gap-3">
            <FaYoutube size={36} />
            <div className="flex flex-col items-start">
               <h3 className="font-semibold">{title}</h3>
               <p>+{reward} WP</p>
            </div>
         </div>
         <div className="">
            <button className="bg-white text-black rounded-3xl py-1.5 px-4">{action}</button>
         </div>
      </div>
   );
}