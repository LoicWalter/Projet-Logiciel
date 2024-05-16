import { PrismaClient } from ".prisma/client";
const prisma = new PrismaClient();
async function main() {
  const Alice = await prisma.user.create({
    data: {
      email: "Alice",
    },
  });

  console.log({ Alice });
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
