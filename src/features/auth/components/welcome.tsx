import LogoWhite from "@/assets/icons/logo-white.svg";

export const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-transparent">
      <div className="bg-transparent">
        <img src={LogoWhite} alt="welcome logo" />
      </div>
    </div>
  );
};
