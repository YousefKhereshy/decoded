const { PrismaClient } = require('@prisma/client');

// Prisma client handles database connections with parameterized queries, preventing SQL injection.
const prisma = new PrismaClient();
module.exports = prisma;
