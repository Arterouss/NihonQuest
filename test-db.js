const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() {
  try {
    const users = await prisma.user.findMany({take: 1});
    console.log('DB SUCCESS:', users);
  } catch(e) {
    console.error('DB ERROR:', e);
  } finally {
    await prisma.$disconnect();
  }
}
main();
