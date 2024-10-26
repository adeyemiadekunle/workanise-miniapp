import LoginBack from "@/assets/icons/auth-bg.svg";
import Seller from "@/assets/icons/welcome.gif";
import { useLogin } from "../api/auth";
import { initDataStartParam, initDataUser } from "@telegram-apps/sdk-react";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/hooks/useAppContext";
import { useNavigate } from "react-router-dom";
import { saveToState } from "@/lib/store";
import { storeLocalUserData } from "@/lib/local-storage";
import { useToast } from "@/hooks/use-toast";

export const Login = () => {
  const { dispatch } = useAppContext();
  const navigate = useNavigate();

  const { showToast } = useToast();

  const { mutate,} = useLogin({
    mutationConfig: {
      onSuccess: (response) => {
        storeLocalUserData(response?.data);
        dispatch(saveToState(response?.data));
        navigate("/");
      },
      onError: (error) => {
        showToast(`Login error: ${error.message}`, "error");
      },
    },
  });
  const startParam = initDataStartParam();
  const initUser = initDataUser();

  const handleLogin = () => {
    if (initUser) {
      mutate({ referralCode: startParam });
    }
  };

  return (
    <>
      <div
        className="min-h-screen bg-black"
        style={{
          backgroundImage: `url(${LoginBack})`,
          backgroundSize: "cover",
        }}
      >
        <div className="h-screen flex flex-col justify-between pb-6">
          <div className="mt-20 flex flex-col justify-center items-center">
            <img
              src={Seller}
              alt="seller"
              width="90%"
              height="100%"
              className=""
            />
            <h2 className="text-[36px] font-bold text-center mt-[-50px]">
              Welcome, <span className="text-primary">Seller</span>
            </h2>
          </div>

          <div className="w-full flex px-6 ">
            <Button size="lg" onClick={handleLogin}>
              Proceed
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
