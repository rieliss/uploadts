import prisma from "@/app/db";
import React from "react";
import Image from "next/image";

type Props = {};

async function getData() {
  const data = await prisma.imgFile.findMany({
    select: {
      originalName: true,
      id: true,
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
          <div
            key={img.id}
            className="flex flex-col justify-center items-center"
          >
            <a
              className="flex flex-col rounded-lg p-2 h-full border-2 border-gray-100 items-center group border-transparent px-4 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              href={`/vote/${img.originalName.slice(0, 7)}`}
            >
              <div className="flex flex-col justify-center items-center gap-2">
                <Image
                  src={`/uploads/${img.originalName}`}
                  width={150}
                  height={0}
                  alt="Picture of the author"
                  className="rounded"
                />
                <h2>{img.originalName.slice(0, 7)}</h2>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}
