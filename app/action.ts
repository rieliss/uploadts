"use server";

import { revalidatePath } from "next/cache";
import { PrismaClient } from "@/prisma/generated/client";
const prisma = new PrismaClient()
export async function getData(value: any) {
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

export async function searchItem(formData: FormData) {
  try {
    let input = formData.get("input") as string;
    console.log(input);

    const data = await prisma.user.findFirst({
      select: {
        username: true,
        name: true,
        id: true,
        department: true,
      },
      where: {
        username: input,
      },
      orderBy: {
        username: "desc",
      },
    });
    if (data) {
      return data;
    }
    return false;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteItem(formData: FormData) {
  const inputId = formData.get("inputId") as string;

  await prisma.imgFile.delete({
    where: {
      originalName: inputId,
    },
  });
  revalidatePath("/delete_photos");
}

export async function updateItem(formData: FormData) {
  try {
    const NoId = formData.get("no") as string;
    const Vote = formData.get("Vote") as string;

    let day = formData.get("day") as string;
    let month = formData.get("month") as string;
    let year = formData.get("year") as string;
    let CheckDate = year + "-" + month + "-" + day + "T00:00:00Z";
    console.log(CheckDate);
    const dateCheck = await prisma.user.findFirst({
      where: {
        username: NoId,
        StartDate: CheckDate,
      },
    });
    console.log(dateCheck);

    if (dateCheck) {
      await prisma.user.update({
        where: {
          username: NoId,
        },
        data: {
          status: 1,
          VoteFor: Vote,
        },
      });
      revalidatePath("/result");
      return true;
    } else {
      return false;
    }
  } catch (error: any) {
    console.log(error);
  }
}
