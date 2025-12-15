/**
 * 🗂️ Prisma Client Setup
 *
 * This file creates a single instance of PrismaClient that we can reuse
 * throughout our application. This is important because:
 *
 * 1. In development, Next.js hot reloading can create multiple instances
 * 2. Each instance creates a new database connection
 * 3. Too many connections = database errors!
 *
 * Solution: Store the client in `globalThis` so it persists across hot reloads
 */

import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

// 🔌 Create the PostgreSQL adapter with connection string from .env
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

// Create a type for our global prisma variable
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// If prisma already exists in global, use it. Otherwise, create a new one.
// The adapter connects PrismaClient to your PostgreSQL database
export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

// In development, save prisma to global to prevent multiple instances
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
