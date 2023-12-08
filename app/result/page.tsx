import StatementChart from "@/app/result/Chart/StatementChart";
import { DailyAmount } from "./Chart/types";
import Balance from "./Balance/Balance";

import { DM_Sans } from "next/font/google";
import prisma from "../db";
import Nav from "@/components/nav";
const DMsans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });

// async function getData() {
//   const data = await prisma.user.findMany({
//     select: {
//       status: true,
//       VoteFor: true,
//     },
//     where: {
//       status: 1,
//     },
//     distinct: ["VoteFor"],
//     orderBy: {
//       id: "desc",
//     },
//   });
//   return data;
// }

async function getData() {
  const data = await prisma.user.groupBy({
    by: ["VoteFor"],
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

  return (
    <main className="p-4">
      <Nav />
      <div
        className={`flex space-y-6 flex-col items-center mt-8 ${DMsans.className}`}
      >
        <Balance />
        <StatementChart statement={data as DailyAmount[]} />
      </div>
    </main>
  );
}
