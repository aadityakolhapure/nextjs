import { FC } from "react";
import AchievementCard from "../components/AchievementCard"; // Import the AchievementCard component

const achievements = [
  {
    title: "Red Hat India Final Challenge",
    date: "September 2024",
    description: "3rd place winner in the Red Hat India Final Challenge Contest.",
    certificateImage: "/ach.png", // Path to certificate image
  },
  // Other achievements can be added later
];

const AchievementsPage: FC = () => {
  return (
    <div className="flex justify-center items-center h-full p-6">
      <div className="w-full max-w-3xl">
        {/* Achievement Header */}
        {/* <h1 className="text-4xl font-bold text-center mb-8">My Achievement</h1> */}

        {/* Achievement Card */}
        <div className="grid grid-cols-1 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              title={achievement.title}
              date={achievement.date}
              description={achievement.description}
              certificateImage={achievement.certificateImage} // Pass the certificate image
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;
