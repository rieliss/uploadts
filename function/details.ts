"use server";

import { revalidatePath } from "next/cache";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function UpdateStatus(e: any) {
  try {
    const Check = await prisma.user.findMany({
      where: {
        username: e,
      },
    });
    console.log(Check);
    revalidatePath("/vote");
  } catch (error: any) {
    console.log(error);
  }
}
