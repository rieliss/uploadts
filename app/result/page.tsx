import StatementChart from "@/app/result/Chart/StatementChart";
import Balance from "./Balance/Balance";

import { DM_Sans } from "next/font/google";
import prisma from "../db";
import Nav from "@/components/nav";
import { DailyAmount } from "./Chart/types";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const DMsans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });

async function getData() {
  const data = await prisma.user.groupBy({
    by: ["VoteFor"],
    // take: 5,
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
  let data = await getData();
  let sixup: any = [];
  const newData = data.filter((data: any, index: number) => {
    if (index < 5) {
      return data;
    } else {
      sixup.push(data);
    }
  });
  sixup = Array.from(sixup);

  const aggregations = await prisma.user.aggregate({
    _sum: {
      status: true,
    },
  });

  return (
    <main className="p-4 w-full">
      <Nav />
      <section
        className={`flex space-y-2 flex-col items-center mt-8 ${DMsans.className} w-full`}
      >
        <Balance />
        <StatementChart statement={newData as DailyAmount[]} />
        <div className="flex flex-col items-center w-full bg-white text-black justify-center rounded-xl p-4">
          <p className="text-gray-500 text-xs md:text-md ">Total of Vote</p>
          <h2 className="text-4xl md:text-4xl font-semibold">
            {aggregations._sum.status}
          </h2>
        </div>
      </section>
      <Table className="overflow-hidden text-[20px] w-full">
        <TableCaption>Total of Vote.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px] text-center font-bold text-black ">
              Number
            </TableHead>
            <TableHead className="text-center w-[1500px] font-bold text-black">
              Name
            </TableHead>
            <TableHead className="font-bold text-black">Point</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sixup
            ? sixup.map((data: any, index: number) => {
                return (
                  <TableRow key={index + "table"}>
                    <TableCell className="font-medium text-center">
                      {index + 6}
                    </TableCell>
                    <TableCell className="text-center">
                      {data["VoteFor"]}
                    </TableCell>
                    <TableCell>{data["_sum"].status}</TableCell>
                  </TableRow>
                );
              })
            : null}
        </TableBody>
      </Table>
    </main>
  );
}
