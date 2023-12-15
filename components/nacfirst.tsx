

import React from "react";
import { TrophyIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Button } from "./ui/button";
import { Moon, Sun, ArrowLeftCircle } from "lucide-react";
import Logo from "@/public/DL.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {};

export default function NavFirstBar({}: Props) {
  return (
    <header>
      <nav>
        <ul className="flex items-center justify-between">
          <li>
          <Link href={'/'}>
              <Image src={Logo} alt="Logo" width={75} height={75} />
           </Link>
          </li>
          <li>
            <div  className="h-[5rem] w-[5rem">
                <Link href={'/result'}>
                   <TrophyIcon className="h-[4rem] w-[4rem] rotate-0 scale-100 duration-300 dark:-rotate-90 dark:scale-0 text-red-500 hover:bg-gray-50 px-2 py-3 rounded-sm "  />
                </Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
