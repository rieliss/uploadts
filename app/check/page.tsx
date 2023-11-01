import React from "react";
import { PrismaClient } from "@prisma/client";
import { CheckMorePage } from "@/components/ranout";

const prisma = new PrismaClient();

export default async function MorePage() {
  const GetData = await prisma.user.findMany();
  return (
    <main className="p-4">
      <section className="py-8 flex flex-col items-center text-center">
        <CheckMorePage Data={GetData} />
      </section>
    </main>
  );
}
