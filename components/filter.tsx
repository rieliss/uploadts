"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type FormValues = {
  username: string;
};

export default function FilterValue() {
  const [inputValue, setInputValue] = useState<string>("");

  const onSubmit = async () => {
    try {
      const search = await prisma.user.findMany({
        where: {
          username: inputValue,
        },
      });
      console.log(search);
      return {
        props: { search },
        revalidate: 10,
      };
    } catch (error: any) {
      console.log(error);
    }
  };

  // async function onSubmit(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   const search = await prisma.user.findMany({
  //     where: {
  //       username: inputValue,
  //     },
  //   });
  //   console.log(search);
  // }
  return (
    <div className="flex flex-col justify-center gap-6">
      <form onSubmit={onSubmit}>
        <div className="flex justify-center gap-x-4">
          <Input
            type="text"
            placeholder="รหัสพนักงาน"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button variant="secondary" type="submit">
            Search
          </Button>
        </div>
        <div>
          <p className="text-2xl text-blue-500">{inputValue}</p>
        </div>
      </form>
    </div>
  );
}
