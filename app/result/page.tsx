import StatementChart from "@/app/result/Chart/StatementChart";
import { DailyAmount } from "./Chart/types";
import Balance from "./Balance/Balance";

import { DM_Sans } from "next/font/google";
import prisma from "../db";
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
  console.log(data);

  return (
    <main
      className={`container flex min-h-screen space-y-6 flex-col items-center justify-center w-full ${DMsans.className}`}
    >
      <Balance />
      <StatementChart statement={data as DailyAmount[]} />
    </main>
  );
}
