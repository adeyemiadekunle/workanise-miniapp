import { Card, CardContent } from "@/components/ui/card"

interface WeeklyTaskCardProps {
   onClick: () => void
}

export const WeeklyTaskCard = ({ onClick }: WeeklyTaskCardProps) => {
   return (<>
      <Card
         className="bg-secondary w-full flex-shrink-0 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer rounded-3xl"
         onClick={onClick}
      >
         <CardContent>
            <div className="mt-[15px]">
               <h2 className="text-xl font-bold text-white">Workanise Quest</h2>
            </div>
            <div className="flex justify-between items-center mt-[20px]">
               <button className="bg-white text-black rounded-3xl py-2.5 px-5">Start</button>
               <button className="bg-tranparent  text-white rounded-3xl py-2 px-5 border-[4px] border-gray-700 ">0/3</button>
            </div>

         </CardContent>
      </Card>
   </>)
}