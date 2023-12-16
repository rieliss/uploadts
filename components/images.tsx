import prisma from "@/app/db";
import React from "react";
import Image from "next/image";
import Link from "next/link";
type Props = {};

async function getData() {
  const data = await prisma.imgFile.findMany({
    select: {
      originalName: true,
      id: true,
      name: true,
      username: true,
      department: true,
    },
    orderBy: {
      id: "desc",
    },
  });
  return data;
}

export default async function AddImage({}: Props) {
  const data = await getData();

  return (
    <div>
      {data.map((img) => {
        return (
          <div key={img.id} className="w-full h-auto grid grid-cols-1">
            <Link href={`/vote/${img.originalName.slice(0, 7)}`} className="m-2 rounded-lg border-2 border-gray-100 text-white bg-[rgb(232,65,71)] items-center group border-transparent space-x-18 px-8 py-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 hover:text-black ">
              <div className="flex flex-col justify-center items-center gap-2">
                <Image
                  src={`/uploads/${img.originalName}`}
                  width={150}
                  height={0}
                  alt="Picture of the author"
                  className="rounded"
                />
                <div className="flex flex-col justify-center items-center mt-2">
                  <h2>
                    <b>{img.name}</b>
                  </h2>
                  <p className="text-sm">{img.originalName.slice(0, 7)}</p>
                  <p className="text-sm">{img.department}</p>
                </div>
              </div>
              </Link>
          </div>
        );
      })}
    </div>
  );
}
