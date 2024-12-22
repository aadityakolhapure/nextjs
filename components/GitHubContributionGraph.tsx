"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface ContributionGraphProps {
  username: string;
  githubToken: string;
}

interface ContributionDay {
  date: Date;
  contributions: number;
}

const ContributionGraph: React.FC<ContributionGraphProps> = ({
  username,
  githubToken,
}) => {
  const [contributionData, setContributionData] = useState<ContributionDay[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const query = `
          query {
            user(login: "${username}") {
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                    }
                  }
                }
              }
            }
          }
        `;

        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            Authorization: `bearer ${githubToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        });

        const result = await response.json();

        if (result.errors) {
          throw new Error(result.errors[0].message);
        }

        const contributions =
          result.data.user.contributionsCollection.contributionCalendar;
        const flattenedData = contributions.weeks.flatMap(
          (week: {
            contributionDays: { contributionCount: number; date: string }[];
          }) =>
            week.contributionDays.map((day) => ({
              date: new Date(day.date),
              contributions: day.contributionCount,
            }))
        );

        setContributionData(flattenedData);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setLoading(false);
      }
    };

    fetchContributions();
  }, [username, githubToken]);

  const getContributionLevel = (contributions: number): number => {
    if (contributions === 0) return 0;
    if (contributions <= 2) return 1;
    if (contributions <= 5) return 2;
    if (contributions <= 8) return 3;
    return 4;
  };

  const getColor = (level: number): string => {
    switch (level) {
      case 0:
        return "#FEF3E2";
      case 1:
        return "#FAB12F";
      case 2:
        return "#FA812F";
      case 3:
        return "#FA4032";
      case 4:
        return "#FA4032";
      default:
        return "#FEF3E2";
    }
  };

  const weeks = [];
  for (let i = 0; i < contributionData.length; i += 7) {
    weeks.push(contributionData.slice(i, i + 7));
  }

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  if (loading) {
    return (
      <Card className="w-full p-4">
        <CardContent>Loading contribution data...</CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="w-full p-4">
        <CardContent className="text-red-500">Error: {error}</CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-4xl p-4 mb-4 pb-8">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-4 lg:px-10">
        <h2 className="text-3xl md:text-4xl text-black dark:text-white max-w-4xl front-bold">
          GitHub Contributions
        </h2>
      </div>
      <CardContent>
        <div className="flex flex-col gap-2">
          {/* Months row */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            {months.map((month, index) => (
              <div key={index} className="w-8">
                {month}
              </div>
            ))}
          </div>
          {/* Scrollable Graph */}
          <div className="overflo w-x-auto relative">
            <div className="inline-flex gap-1">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {week.map((day, dayIndex) => {
                    const level = getContributionLevel(day.contributions);
                    return (
                      <div
                        key={dayIndex}
                        className="w-3 h-3 rounded-sm"
                        style={{ backgroundColor: getColor(level) }}
                        title={`${day.date.toDateString()}: ${
                          day.contributions
                        } contributions`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          {/* Legend */}
          <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
            <span>Less</span>
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: getColor(level) }}
              />
            ))}
            <span>More</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContributionGraph;
