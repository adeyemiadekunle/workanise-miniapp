import { CustomDrawer } from "@/components/ui/drawer";
import QRcode from "@/assets/icons/qrcode.svg";
import { Button } from "@/components/ui/button";
import { useGetUser } from "@/api/get-user";
import { fetchLocalUserData } from "@/lib/local-storage";
import { useState } from "react";
import { Copy, CheckCircle2,  } from "lucide-react";
import { shareURL } from "@telegram-apps/sdk-react";

interface InviteProps {
  open: boolean;
  setClose?: (open: boolean) => void;
}
const botUrl = import.meta.env.VITE_MINIAPP_URL as string;

export const InviteLayer = ({ open, setClose }: InviteProps) => {
  const [copied, setCopied] = useState(false);

  const { user } = fetchLocalUserData() || {};
  const userId = user?.id;

  const { data } = useGetUser({ userId }); // get user

  const referralUrl = `${botUrl}?startapp=${data?.data?.user?.referralCode}`;

  const copyReferralUrl = async () => {
    try {
      await navigator.clipboard.writeText(referralUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset "copied" state after 2 seconds
    } catch (err) {
      console.log(err);
    }
  };

  const forwardToTelegram = async () => {
    if (referralUrl) {
      shareURL(referralUrl);
    }
  };

  return (
    <CustomDrawer
      open={open}
      openChange={() => setClose?.(false)}
      footer={
        <div onClick={() => setClose?.(false)} className="text-center pb-2">
          Close
        </div>
      }
    >
      <div className="mt-4">
        <h3 className="text-center">Invite Friend</h3>

        <div className="flex flex-col items-center justify-center mt-[70px]">
          <img src={QRcode} alt="qrcode" />
        </div>

        <div className="flex flex-col space-y-8 mt-10">
          <Button onClick={forwardToTelegram} variant="secondary" size="lg">
            Invite
          </Button>
          <Button onClick={copyReferralUrl} variant="secondary" size="lg">
            {" "}
            {copied ? (
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            ) : (
              <Copy className="h-5 w-5" />
            )}{" "}
            <span className="pl-2">Copy Link </span>{" "}
          </Button>
        </div>
      </div>
    </CustomDrawer>
  );
};
