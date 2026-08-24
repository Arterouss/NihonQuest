const fs = require('fs');

let schema = fs.readFileSync('prisma/schema.prisma', 'utf8');

// Remove enum block
schema = schema.replace(/enum Role {[\s\S]*?}/, '');

// Replace role type
schema = schema.replace(/role\s+Role\s+@default\(USER\)/g, 'role String @default("USER")');

// Replace String[] with String
schema = schema.replace(/String\[\]/g, 'String');

// Replace Json? with String?
schema = schema.replace(/Json\?/g, 'String?');

// Replace Json with String
schema = schema.replace(/Json/g, 'String');

fs.writeFileSync('prisma/schema.prisma', schema);
console.log('Schema refactored successfully.');
