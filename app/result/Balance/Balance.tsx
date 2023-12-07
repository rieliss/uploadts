import { FC } from "react";
import Image from "next/image";
// import Logo from "@/app/images/logo.svg";
import Logo from "@/public/DL_bg.png";

const Balance: FC = () => {
  return (
    <section className="w-full bg-[rgb(232,65,71)] text-white flex flex-row items-center justify-between rounded-xl space-x-4 px-6">
      <div className="space-y-1">
        <p className="text-sm text-slate-100">Total of Vote</p>
        {/* <h1 className="text-2xl font-bold">$921.48</h1> */}
      </div>
      <div className="flex flex-0 h-full items-center justify-center">
        <Image src={Logo} width={"80"} alt="Logo" />
      </div>
    </section>
  );
};

export default Balance;