"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";

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

export async function searchItem(prevState: any, formData: FormData) {
  "use server";

  try {
    let input = formData.get("input") as string;

    if (
      !input ||
      input.toString().length < 7 ||
      input === undefined ||
      input == null
    ) {
      return { error: "Please fill youre employee ID." };
    }
    const data = await prisma.user.findMany({
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
    console.log(data);
    revalidatePath("/check");

    // return { data: data };
    return Object.values(data);
  } catch (error: any) {
    return { error: null };
  }
}

export async function deleteItem(formData: FormData) {
  "use server";
  const inputId = formData.get("inputId") as string;

  await prisma.imgFile.delete({
    where: {
      originalName: inputId,
    },
  });
  revalidatePath("/delete_photos");
}

export async function updateItem(formData: FormData) {
  "use server";
  const NoId = formData.get("no") as string;
  const Vote = formData.get("Vote") as string;
  await prisma.user.update({
    where: {
      username: NoId,
    },
    data: {
      status: 1,
      VoteFor: Vote,
    },
  });
  revalidatePath("/");

  // try {
  //   await prisma.user.update({
  //     where: {
  //       username: NoId,
  //     },
  //     data: {
  //       status: true,
  //       VoteFor: Vote,
  //     },
  //   });
  //   revalidatePath("/");
  //   return Response.json({ msg: "voted Successfully" });
  // } catch {
  //   return Response.json({ msg: "voted Unsuccess!" });
  // }
}
