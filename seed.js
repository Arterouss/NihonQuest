const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('admin123', 10);
  
  await prisma.user.upsert({
    where: { email: 'admin@nihonquest.com' },
    update: {},
    create: {
      name: 'Admin NihonQuest',
      email: 'admin@nihonquest.com',
      password: passwordHash,
      role: 'ADMIN'
    }
  });

  const userHash = await bcrypt.hash('user123', 10);
  await prisma.user.upsert({
    where: { email: 'user@nihonquest.com' },
    update: {},
    create: {
      name: 'Test User',
      email: 'user@nihonquest.com',
      password: userHash,
      role: 'USER'
    }
  });

  console.log('Dummy accounts created successfully!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
