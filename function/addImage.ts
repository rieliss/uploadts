"use server";
import { PrismaClient } from "@prisma/client";
import { join } from "path";
import { writeFile, mkdir } from "fs/promises";

const prisma = new PrismaClient();
export async function AddImage(data: FormData) {
  try {
    const files = data.getAll("file") as File[];
    const type = data.get("type") as string;
    // console.log("files : ", files);
    // console.log("type : ", type);

    for (const file of files) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const path = join(process.cwd(), "public", "uploads", file.name);
      await writeFile(path, buffer);
      // console.log("bytes : ", bytes);
      // console.log("buffer : ", buffer);
      // console.log("path : ", path);
      // console.log("file.name : ", file.name.slice(0, 7));
      const user = await prisma.user.findMany({
        select: {
          username: true,
          name: true,
          department: true,
          status: true,
        },
        where: {
          username: file.name.slice(0, 7),
        },
      });
      const typeId = await prisma.typeImg.create({
        data: {
          type: file.name.slice(0, 7),
        },
      });
      await prisma.imgFile.create({
        data: {
          originalName: file.name,
          authorId: typeId.id as number,
          username: user[0].username,
          name: user[0].name,
          department: user[0].department,
        },
      });
    }
  } catch (err) {
    console.log(err);
  }
}
