const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkUsers() {
  try {
    const users = await prisma.user.findMany({
      select: { id: true, email: true, name: true, role: true }
    });
    console.log("Users in database:");
    console.log(users);
  } catch (err) {
    console.error("Database error:", err);
  } finally {
    await prisma.$disconnect();
  }
}

checkUsers();
