import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

interface TaskCardProps {
   onClick: () => void
}

export const TaskCard = ({ onClick }: TaskCardProps) => {
   return (<>
      <Card
         className="bg-primary w-[300px] flex-shrink-0 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
         onClick={onClick}
      >
         <CardContent>
            <div>
               <Avatar>
                  <AvatarImage src="" />
                  <AvatarFallback>CN</AvatarFallback>
               </Avatar>
            </div>
            <div className="mt-[15px]">
               <h2 className="text-xl font-bold">Workanise Quest</h2>
               <p className="pt-2">+5000 WP</p>
            </div>
            <div className="flex justify-between items-center mt-[10px]">
               <button className="bg-gray-900 text-white rounded-3xl py-3 px-6">Start</button>
               <button className="bg-white  text-black rounded-3xl py-2 px-6 border-[4px] border-gray-300 ">0/3</button>
            </div>

         </CardContent>
      </Card>
   </>)
}