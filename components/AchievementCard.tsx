import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"; // Import ShadCN components

// Define types for the AchievementCard props, now including an image URL
interface AchievementCardProps {
  title: string;
  date: string;
  description: string;
  certificateImage: string; // New prop for certificate image URL
}

const AchievementCard: FC<AchievementCardProps> = ({
  title,
  date,
  description,
  certificateImage,
}) => {
  return (
    <Card className="w-full max-w-sm shadow-md rounded-lg border p-4">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
        <p className="text-sm text-gray-500 mt-2">{date}</p>
        
        {/* Display the certificate image */}
        {certificateImage && (
          <div className="mt-4">
            <img
              src={certificateImage}
              alt={`${title} Certificate`}
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AchievementCard;
