// prisma/seed.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // Clear existing data
    // await prisma.commentLike.deleteMany({});
    // await prisma.comment.deleteMany({});
    // await prisma.sessionNote.deleteMany({});
    // await prisma.sessionDrill.deleteMany({});
    // await prisma.trainingSession.deleteMany({});
    // await prisma.availableSession.deleteMany({});
    // await prisma.unlockedDrill.deleteMany({});
    // await prisma.drill.deleteMany({});
    // await prisma.drillCategory.deleteMany({});
    // await prisma.user.deleteMany({});
    await prisma.visit.deleteMany({});
    await prisma.event.deleteMany({});
    await prisma.eventAggregation.deleteMany({});

    // Create Users
    // const user1 = await prisma.user.findUnique({
    //     where: {
    //         email: 'zachcallahan11@gmail.com'
    //     }
    // });

    // const user2 = await prisma.user.findUnique({
    //     where: {
    //         email: 'zachcallahan12@gmail.com'
    //     }
    // });

    // Create Drill Categories
    // const category1 = await prisma.drillCategory.create({
    //     data: {
    //         name: 'Shooting Drills',
    //     },
    // });

    // const category2 = await prisma.drillCategory.create({
    //     data: {
    //         name: 'Passing Drills',
    //     },
    // });

    // // Create Drills
    // const drill1 = await prisma.drill.create({
    //     data: {
    //         name: 'Three-Point Shooting',
    //         videoUrl: 'https://example.com/videos/three-point-shooting.mp4',
    //         categoryId: category1.id,
    //     },
    // });

    // const drill2 = await prisma.drill.create({
    //     data: {
    //         name: 'Free Throw Practice',
    //         videoUrl: 'https://example.com/videos/free-throw-practice.mp4',
    //         categoryId: category1.id,
    //     },
    // });

    // const drill3 = await prisma.drill.create({
    //     data: {
    //         name: 'Chest Pass Drill',
    //         videoUrl: 'https://example.com/videos/chest-pass-drill.mp4',
    //         categoryId: category2.id,
    //     },
    // });

    // // Create Available Sessions (some in the future, some in the past)
    // const now = new Date();
    // const futureDate1 = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // 1 week from now
    // const futureDate2 = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000); // 2 weeks from now
    // const pastDate1 = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000); // 1 week ago
    // const pastDate2 = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000); // 2 weeks ago

    // const availableSession1 = await prisma.availableSession.create({
    //     data: {
    //         dateTime: futureDate1,
    //         booked: true,
    //     },
    // });

    // const availableSession2 = await prisma.availableSession.create({
    //     data: {
    //         dateTime: futureDate2,
    //         booked: true,
    //     },
    // });

    // const availableSession3 = await prisma.availableSession.create({
    //     data: {
    //         dateTime: pastDate1,
    //         booked: true,
    //     },
    // });

    // const availableSession4 = await prisma.availableSession.create({
    //     data: {
    //         dateTime: pastDate2,
    //         booked: true,
    //     },
    // });

    // // Create Upcoming Training Sessions for User1
    // const trainingSession1 = await prisma.trainingSession.create({
    //     data: {
    //         paymentIntentId: 'pi_12345',
    //         status: 'PENDING',
    //         zoomLink: 'https://zoom.us/j/123456789',
    //         userId: user1.id,
    //         availableSessionId: availableSession1.id,
    //     },
    // });

    // const trainingSession2 = await prisma.trainingSession.create({
    //     data: {
    //         paymentIntentId: 'pi_67890',
    //         status: 'ACTIVE',
    //         zoomLink: 'https://zoom.us/j/987654321',
    //         userId: user1.id,
    //         availableSessionId: availableSession2.id,
    //     },
    // });

    // // Create Previous Training Sessions for User1
    // const trainingSession3 = await prisma.trainingSession.create({
    //     data: {
    //         paymentIntentId: 'pi_54321',
    //         status: 'COMPLETED',
    //         zoomLink: 'https://zoom.us/j/111222333',
    //         userId: user1.id,
    //         availableSessionId: availableSession3.id,
    //     },
    // });

    // const trainingSession4 = await prisma.trainingSession.create({
    //     data: {
    //         paymentIntentId: 'pi_09876',
    //         status: 'COMPLETED',
    //         zoomLink: 'https://zoom.us/j/444555666',
    //         userId: user1.id,
    //         availableSessionId: availableSession4.id,
    //     },
    // });

    // // Assign Drills to Training Sessions
    // await prisma.sessionDrill.createMany({
    //     data: [
    //         {
    //             trainingSessionId: trainingSession1.id,
    //             drillId: drill1.id,
    //         },
    //         {
    //             trainingSessionId: trainingSession1.id,
    //             drillId: drill2.id,
    //         },
    //         {
    //             trainingSessionId: trainingSession2.id,
    //             drillId: drill3.id,
    //         },
    //         {
    //             trainingSessionId: trainingSession3.id,
    //             drillId: drill1.id,
    //         },
    //     ],
    // });

    // // Add Session Notes to Completed Sessions
    // await prisma.sessionNote.create({
    //     data: {
    //         notes: 'Great progress on shooting technique. Keep practicing!',
    //         trainingSessionId: trainingSession3.id,
    //     },
    // });

    // await prisma.sessionNote.create({
    //     data: {
    //         notes: 'Passing accuracy improved. Work on speed.',
    //         trainingSessionId: trainingSession4.id,
    //     },
    // });

    // // Create Training Sessions for User2 (No upcoming sessions)
    // const trainingSession5 = await prisma.trainingSession.create({
    //     data: {
    //         paymentIntentId: 'pi_11223',
    //         status: 'COMPLETED',
    //         zoomLink: 'https://zoom.us/j/777888999',
    //         userId: user2.id,
    //         availableSessionId: availableSession3.id,
    //     },
    // });

    // // Assign Drills to User2's Training Session
    // await prisma.sessionDrill.create({
    //     data: {
    //         trainingSessionId: trainingSession5.id,
    //         drillId: drill2.id,
    //     },
    // });

    // // Add Session Note to User2's Training Session
    // await prisma.sessionNote.create({
    //     data: {
    //         notes: 'Focus on free throw consistency.',
    //         trainingSessionId: trainingSession5.id,
    //     },
    // });

    console.log('Seed data created successfully.');
}

main()
    .catch((e) => {
        console.error('Error seeding data:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });