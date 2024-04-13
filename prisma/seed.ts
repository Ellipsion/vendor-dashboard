const { PrismaClient } =  require('@prisma/client');
const prisma = new PrismaClient();
const data = require("./data.json");

async function main() {
    try {
        await prisma.vendor.createMany({
            data
        })

        console.log("[Prisma Seed Success]")
    } catch (error) {
        console.log("[Prisma Seed Error]", error)
    } finally {
        await prisma.$disconnect();
    }
} 

main()