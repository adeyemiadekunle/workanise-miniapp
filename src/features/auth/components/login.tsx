import LoginBack from "@/assets/icons/auth-bg.svg";
import Seller from "@/assets/icons/welcome.gif";

import { Button } from "@/components/ui/button";

export const Login = () => {
  return (
    <div
      className="min-h-screen bg-black"
      style={{ backgroundImage: `url(${LoginBack})`, backgroundSize: "cover",  }}
    >
      <div className="h-screen flex flex-col justify-between pb-6">
        <div className="mt-20 flex flex-col justify-center items-center">
          <img src={Seller} alt="seller" width='90%' height='100%' className=""/>
          <h2 className="text-[36px] font-bold text-center mt-[-50px]">
            Welcome, <span className="text-primary">Seller</span>
          </h2>
        </div>

        <div className="w-full flex px-6 ">
          <Button size='lg' >Proceed</Button>
        </div>
      </div>
    </div>
  );
};
