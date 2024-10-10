import LoginBack from "@/assets/icons/auth-bg.svg";
import Seller from "@/assets/icons/welcome.svg";
import { Button } from "@/components/ui/button";

export const Login = () => {
  return (
    <div
      className="min-h-screen bg-black"
      style={{ backgroundImage: `url(${LoginBack})`, backgroundSize: "cover",  }}
    >
      <div className="h-screen flex flex-col justify-between pb-6">
        <div className="mt-12">
          <img src={Seller} alt="seller" width='100%' height='100%' />
          <h2 className="text-[42px] font-bold text-center mt-[-50px]">
            Welcome, <span className="text-[#A8F2CF]">Seller</span>
          </h2>
        </div>

        <div className="w-full flex px-6 ">
          <Button  className="w-full bg-[#A8F2CF] hover:bg-[#A8F2CF/70] text-black h-14 text-xl">Proceed</Button>
        </div>
      </div>
    </div>
  );
};
