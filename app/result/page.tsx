import StatementChart from "@/app/result/Chart/StatementChart";
import Balance from "./Balance/Balance";

import { DM_Sans } from "next/font/google";
import prisma from "../db";
import Nav from "@/components/nav";
import { DailyAmount } from "./Chart/types";
const DMsans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });

async function getData() {
  const data = await prisma.user.groupBy({
    by: ["VoteFor"],
    take: 5,
    _sum: {
      status: true,
    },
    having: {
      VoteFor: {
        not: "x",
      },
    },
    orderBy: {
      _count: {
        status: "desc",
      },
    },
  });
  return data;
}

export default async function Home() {
  const data = await getData();

  const aggregations = await prisma.user.aggregate({
    _sum: {
      status: true,
    },
  });

  return (
    <main className="p-4">
      <Nav />
      <div
        className={`flex space-y-2 flex-col items-center mt-8 ${DMsans.className}`}
      >
        <Balance />
        <StatementChart statement={data as DailyAmount[]} />
        <div className="flex flex-col items-center w-full bg-white text-black justify-center rounded-xl p-4">
          <p className="text-gray-500 text-xs md:text-md">Total of Vote</p>
          <h2 className="text-4xl md:text-4xl font-semibold">
            {aggregations._sum.status}
          </h2>
        </div>
      </div>
    </main>
  );
}
