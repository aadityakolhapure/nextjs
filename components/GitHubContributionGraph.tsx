"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";


interface ContributionGraphProps {
  username: string;
  token: string;
}

const GitHubContributionGraph: React.FC<ContributionGraphProps> = ({
  username,
  token,
}) => {
  const [contributions, setContributions] = useState<any[]>([]);
  const [years, setYears] = useState<number[]>([]);
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    async function fetchContributionData() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/contributions?year=${selectedYear}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch contributions data");
        }

        const data = await response.json();
        setContributions(data.contributions || []);

        // Set available years (mock for simplicity)
        setYears([2023, 2022, 2021, 2020]);
      } catch (error) {
        console.error("Error fetching contributions:", error);
      }
    }

    fetchContributionData();
  }, [username, token, selectedYear]);

  const handleYearChange = (year: number) => {
    setSelectedYear(year);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:px-8 lg:px-10 bg-[#FEF3E2] rounded-md shadow-md">
      <h2 className="text-2xl md:text-3xl font-bold text-[#FA812F] mb-4">
        GitHub Contributions
      </h2>
      <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 mb-6">
        View your GitHub contributions over the years.
      </p>

      {/* Year Tabs */}
      <div className="flex space-x-4 mb-6">
        {years.map((year) => (
          <button
            key={year}
            className={`px-4 py-2 rounded-md font-medium transition-all ${
              selectedYear === year
                ? "bg-[#FAB12F] text-white"
                : "bg-[#FA812F] text-black hover:bg-[#FA4032] hover:text-white"
            }`}
            onClick={() => handleYearChange(year)}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Contribution Graph */}
      <div className="overflow-auto">
        {contributions.length > 0 ? (
          <Heatmap
            data={contributions}
            colorScale={["#FEF3E2", "#FAB12F", "#FA812F", "#FA4032"]}
            startDate={new Date(`${selectedYear}-01-01`)}
            endDate={new Date(`${selectedYear}-12-31`)}
          />
        ) : (
          <p className="text-neutral-500 dark:text-neutral-400">
            No contributions data available for the selected year.
          </p>
        )}
      </div>
    </div>
  );
};

export default GitHubContributionGraph;
