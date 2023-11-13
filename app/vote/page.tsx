import { PlacePage } from "@/components/place";
import React from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function LocationPage() {
  return (
    <main className="p-4">
      <section className="py-4 flex flex-col items-center text-center gap-y-4">
        <div className="grid text-center grid-cols-2 gap-8 lg:max-w-4xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <PlacePage />
        </div>
      </section>
    </main>
  );
}
