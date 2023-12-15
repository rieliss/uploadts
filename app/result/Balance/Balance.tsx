import { FC } from "react";
import Image from "next/image";
import Logo from "@/public/DL_bg.png";

const Balance: FC = () => {
  return (
    <section className="w-full bg-[rgb(232,65,71)] text-white flex flex-row items-center justify-between rounded-xl px-6">
      <div className="">
        <p className="text-sm text-slate-100 text-[15px]">Total of Vote</p>
      </div>
      <div className="flex flex-0 h-full items-center justify-center">
        <Image src={Logo} width={"80"} alt="Logo" />
      </div>
    </section>
  );
};

export default Balance;
