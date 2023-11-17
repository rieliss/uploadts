import FormElement from "@/components/form";
import prisma from "../db";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";
import { searchItem } from "../action";

async function getData(value: any) {
  const data = await prisma.user.findMany({
    select: {
      username: true,
      name: true,
      id: true,
    },
    where: {
      username: value,
    },
    orderBy: {
      username: "desc",
    },
  });
  return data;
}

export default async function Home() {
  const data = await getData("1007599");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="border rounded-lg shadow-xl p-10 w-[30vw]">
        <div className="mt-5 flex flex-col gap-y-2">
          <div className="flex items-center justify-center gap-2">
            <Input
              type={"text"}
              name="username"
              placeholder="รหัสพนักงาน"
              className="border p-1 border-gray-300 rounded-lg"
            />
            <Button
              variant="secondary"
              className="bg-green-500 rounded-lg text-white py-2"
              type="submit"
            >
              Search
            </Button>
          </div>
          {data.map((todo) => (
            <div key={todo.id} className="flex justify-between mt-2">
              <p>{todo.name}</p>
              <p>{todo.username}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
