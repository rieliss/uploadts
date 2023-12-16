import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Button } from "./ui/button";
import Logo from "@/public/DL.png";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <header>
      <nav>
        <ul className="flex items-center justify-between">
          <li>
            <Link href={"/"}>
              <Image src={Logo} alt="Logo" width={75} />
            </Link>
          </li>
          <li>
            <Link href={"/"} className="">
              <ChevronLeftIcon className="h-[2.5rem] w-[2.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 bg-slate-100 px-1 rounded-sm hover:text-white hover:bg-black" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
