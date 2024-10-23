import { TabsContent, TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs"
import { TaskItem } from "./task-items";
import { TaskCard } from "./task-card";
import { WeeklyTaskCard } from "./weekly-task";




export const Task = () => {
   return (<>

      <div className="h-full">
         <div className="mt-[20px]">
            <h2 className="text-2xl font-bold">Tasks</h2>
         </div>
         <div className="overflow-x-auto flex space-x-6 py-5" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <TaskCard onClick={() => console.log("click")} />
            <TaskCard onClick={() => console.log("click")} />
            <TaskCard onClick={() => console.log("click")} />
         </div>
         <div>
            <h3 className="text-xl font-bold pb-3">Weekly</h3>
            <div className="overflow-x-auto flex space-x-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
               <WeeklyTaskCard
                  onClick={() => console.log("click")}
               />
            </div>
         </div>
         <div className="mt-[20px]">
            <Tabs defaultValue="new" className="w-full">
               <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="new">New</TabsTrigger>
                  <TabsTrigger value="onchain">Onchain</TabsTrigger>
                  <TabsTrigger value="social">Socials</TabsTrigger>
                  <TabsTrigger value="frens">Friends</TabsTrigger>
               </TabsList>
               <TabsContent value="new" className="space-y-6 pt-2">
                  <TaskItem
                     title="Complete New User"
                     reward={100}
                     action="Start"
                  />
                  <TaskItem
                     title="Complete New User"
                     reward={100}
                     action="Start"
                  />
                  <TaskItem
                     title="Complete New User"
                     reward={100}
                     action="Start"
                  />
                  <TaskItem
                     title="Complete New User"
                     reward={100}
                     action="Start"
                  />
               </TabsContent>
               <TabsContent value="onchain" className="space-y-6 pt-2">
                  <TaskItem
                     title="Make First Transaction"
                     reward={200}
                     action="Guide"
                  />
               </TabsContent>
               <TabsContent value="social" className="space-y-6 pt-2">
                  <TaskItem
                     title="Share on Twitter"
                     reward={75}
                     action="Share"
                  />
               </TabsContent>
               <TabsContent value="frens" className="space-y-6 pt-2">
                  <TaskItem
                     title="Invite a Friend"
                     reward={150}
                     action="Invite"
                  />
               </TabsContent>
            </Tabs>
         </div>
      </div>
   </>)


}