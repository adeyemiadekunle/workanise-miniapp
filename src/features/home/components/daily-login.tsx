import { Button } from "@/components/ui/button";
import Reward from '@/assets/icons/task.gif';
import { DailyCustomDrawer } from "@/components/ui/drawer/daily-reward-drawer"

interface DailyLoginProps {
  open: boolean;
  setClose?: (open: boolean) => void;
  handleClaim: () => void; // New prop to open the next drawer
}

export const DailyLoginReward = ({ open, setClose, handleClaim }: DailyLoginProps) => {

  const handleCloseandContinue = () => {
    setClose?.(false); // Closes the drawer

  };

  const claim = () => {
    handleClaim(); // Opens the Tips drawer
  }

  return (
    <DailyCustomDrawer
      open={open}
      openChange={() => setClose?.(false)}
    >
      <div className="flex flex-col mx-auto w-full">
        <div className="mt-[100px]">
          <h1 className="text-[30px] text-primary font-bold text-center">Your Daily Rewards</h1>
        </div>
        <div className="flex flex-col justify-center items-center mb-[20px]">
          <div onClick={claim} className="flex flex-col items-center mb-[10px]">
            <img src={Reward} alt="reward" width='60%' />
          </div>
          <p className="text-[16px]">Click the box to collect reward</p>
        </div>
        <div className="mt-[40px]">
          <p className="text-center text-[16px]">Continue for your daily reward</p>
        </div>
        <div className="mt-[50px]">
          <Button variant='secondary' size='lg' onClick={handleCloseandContinue}>
            Continue
          </Button>
        </div>
      </div>
    </DailyCustomDrawer>
  );
};
