"use client";

import prisma from "@/app/db";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useCallback, useRef } from "react";

async function getData(credentials: any) {
  const { username } = credentials;
  const data = await prisma.user.findMany({
    where: {
      username: username,
    },
  });
  return data;
}

export default function page() {
  const userref = useRef<string>("");
  const Login = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await getData("credentials", {
      username: userref.current,
      redirect: true,
      callbackUrl: "/",
    });
  }, []);
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
              onChange={(e) => (userref.current = e.target.value)}
            />
            <Button variant="secondary" type="submit">
              Search
            </Button>
          </div>
        </form>
      </div>
      {/* {data.map((users) => (
        <div key={users.id}>
          <p className="text-xl text-blue-500 p-2">{users.name}</p>
        </div>
      ))} */}
    </div>
  );
}
