const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const email = 'admin@nihonquest.com';
  const password = 'admin123';
  
  console.log('Testing login for:', email);
  const user = await prisma.user.findUnique({ where: { email } });
  
  if (!user) {
    console.log('User not found!');
    return;
  }
  console.log('User found:', user.email, 'Role:', user.role);
  
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    console.log('Password does not match!');
    return;
  }
  
  console.log('Login successful! Everything works at DB level.');
}

main().catch(console.error).finally(() => prisma.$disconnect());
