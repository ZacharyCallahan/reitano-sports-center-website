import Image from "next/image";
import ExperienceCard from "./ExperienceCard";

const ExperiencesSection = () => {
    return (
        <main className="font-sans">
            {/* Header Section */}
            <section className="text-center p-6 sm:p-12">
                <h1 className="text-2xl sm:text-4xl font-bold mb-4">
                    REP Fieldhouse is a multi-purpose indoor sports facility in Columbus, Ohio.
                </h1>
                <p className="max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
                    The 23,000 square-foot venue features two hardwood basketball courts,
                    an athletic turf field, Dr. Dish shooting guns, HitTrax simulator, and more!
                    REP Fieldhouse is a place for athletes of all skill levels to train,
                    play, and improve one REP at a time.
                </p>
            </section>

            {/* Horizontal divider + heading */}
            <section className="text-center mb-6">
                <hr className="my-6 mx-auto w-4/5 border-gray-300" />
                <h2 className="text-xl sm:text-3xl font-bold mt-4">REP Experiences</h2>
            </section>

            {/* Experiences Grid */}
            <section className="flex flex-wrap justify-center gap-12 px-4 pb-8">
                {/* Basketball Card */}
                <ExperienceCard 
                    src="/Whittier-Basketball-Workout.jpg"
                    header="Basketball"
                    description="Shooting Station Memberships & Training"
                />

                {/* Baseball & Softball Card */}
                <ExperienceCard 
                    src="/Whittier-Basketball-Workout.jpg"
                    header="Baseball & Softball"
                    description={`Batting Tunnels & Turf Rentals & Training`}
                />

                {/* Court Rentals Card */}
                <ExperienceCard 
                    src="/Whittier-Basketball-Workout.jpg"
                    header="Court Rentals"
                    description="Basketball & Volleyball & Pickleball"
                />
            </section>
        </main>
    );
}

export default ExperiencesSection;