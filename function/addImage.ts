"use server";
import { PrismaClient } from "@prisma/client";
import { join } from "path";
import { writeFile, mkdir } from "fs/promises";

const prisma = new PrismaClient();
export async function AddImage(data: FormData) {
  try {
    const files = data.getAll("file") as File[];
    const type = data.get("type") as string;

    const typeId = await prisma.typeImg.create({
      data: {
        type: type,
      },
    });

    for (const file of files) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const path = join(process.cwd(), "public", "uploads", file.name);
      await writeFile(path, buffer);
      await prisma.imgFile.create({
        data: {
          originalName: file.name,
          authorId: typeId.id as number,
        },
      });
    }
  } catch (err) {
    console.log(err);
  }
}
