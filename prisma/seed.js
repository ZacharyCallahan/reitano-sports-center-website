import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding database...');
    await prisma.user.deleteMany();
    await prisma.trainer.deleteMany();
    await prisma.trainingSession.deleteMany();
    await prisma.coupon.deleteMany();
    await prisma.marketingList.deleteMany();
    

    // 1. Create Admin user (optional)
    const adminPassword = await bcrypt.hash('Admin123!', 10);
    const adminUser = await prisma.user.create({
        data: {
            email: 'admin@example.com',
            password: adminPassword,
            role: 'ADMIN',
            firstName: 'Admin',
            lastName: 'User',
            passwordSet: true,
        },
    });

    // 2. Create basic users (optional)
    const testUserPassword = await bcrypt.hash('User123!', 10);
    const testUser = await prisma.user.create({
        data: {
            email: 'testuser@example.com',
            password: testUserPassword,
            role: 'USER',
            firstName: 'Test',
            lastName: 'User',
            passwordSet: true,
        },
    });

    // 3. Create Trainers
    const trainerSeth = await prisma.trainer.create({
        data: {
            name: 'Seth',
        },
    });

    const trainerJames = await prisma.trainer.create({
        data: {
            name: 'James',
        },
    });

    // 4. Create some TrainingSessions for each trainer
    // Note: Dates in the future for availability
    const now = new Date();
    const oneDayFromNow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    const twoDaysFromNow = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000);
    const threeDaysFromNow = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);

    // For Seth
    await prisma.trainingSession.create({
        data: {
            id: 'seth-session-1', // manual ID
            date: oneDayFromNow,
            price: 50.0,
            trainerId: trainerSeth.id,
        },
    });

    await prisma.trainingSession.create({
        data: {
            id: 'seth-session-2',
            date: twoDaysFromNow,
            price: 60.0,
            trainerId: trainerSeth.id,
        },
    });

    // For James
    await prisma.trainingSession.create({
        data: {
            id: 'james-session-1',
            date: threeDaysFromNow,
            price: 55.0,
            trainerId: trainerJames.id,
        },
    });

    // 5. Create a sample coupon (optional)
    await prisma.coupon.create({
        data: {
            code: 'FIRST-TIMER',
            discountType: 'PERCENTAGE',
            discountValue: 10.0,
            expiresAt: new Date(new Date().setMonth(new Date().getMonth() + 1)), // valid for 1 month
            maxUses: 50,
        },
    });

    // 6. Create a sample marketing list entry (optional)
    await prisma.marketingList.create({
        data: {
            email: 'subscriber@example.com',
        },
    });

    console.log('Seeding completed!');
}

main()
    .catch((e) => {
        console.error('Seeding error:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
