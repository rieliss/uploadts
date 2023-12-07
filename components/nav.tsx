"use client";

import React from "react";
import {
  ArrowLeftCircleIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/solid";
import { Button } from "./ui/button";
import { Moon, Sun, ArrowLeftCircle } from "lucide-react";
import Logo from "@/public/DL.png";
import Image from "next/image";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <header>
      <nav>
        <ul className="flex items-center justify-between">
          <li>
            <a href="/">
              <Image src={Logo} alt="Logo" width={75} />
            </a>
          </li>
          <li>
            <Button variant="outline" size="icon">
              <a href="/" target="_self" rel="noopener noreferrer">
                <ChevronLeftIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              </a>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}