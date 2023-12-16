import React from "react";
import AddImage from "@/components/images";
import { DM_Sans } from "next/font/google";
import NavFirstBar from "@/components/nacfirst";
const DMsans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });


export default async function LocationPage() {
  return (
    <main className="p-4">
      <NavFirstBar />
      <div
        className={`container flex min-h-screen space-y-6 flex-col items-center justify-center w-full ${DMsans.className}`}
      >
        <AddImage />
      </div>
    </main>
  );
}
