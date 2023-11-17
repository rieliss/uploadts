"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import prisma from "../db";

async function getData(credentials: any) {
  const { username } = credentials;

  if (username === credentials.username) {
    const data = await prisma.user.findMany({
      where: {
        username: username,
      },
    });
    return data;
  } else {
    return null;
  }
}

export default function Page() {
  const [inputValue, setInputValue] = useState<string>("");
  const data = getData(inputValue);
  console.log(data);
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="border rounded-lg shadow-xl p-10 w-[30vw]">
        <form>
          <div className="flex justify-center gap-x-4">
            <Input
              type="text"
              id="username"
              name="username"
              placeholder="รหัสพนักงาน"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button variant="secondary" type="submit">
              Search
            </Button>
          </div>
        </form>
      </div>
      <p>{inputValue}</p>
      {/* {data.map((users) => (
        <div key={users.id}>
          <p className="text-xl text-blue-500 p-2">{users.name}</p>
        </div>
      ))} */}
    </div>
  );
}
