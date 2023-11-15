import { PrismaClient } from "@prisma/client/edge";

const prisma = new PrismaClient();

export async function main() {
  //   const user = await prisma.name.create({
  //     data: {
  //       name: "่jane",
  //       email: "่jane@gmail.com",
  //     },
  //   });
  const user = await prisma.name.findMany();
  //   const user = await prisma.user.findUnique({
  // where: {
  //   username: "1007599",
  // },
  //   });

  console.log(user, { depth: null });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
