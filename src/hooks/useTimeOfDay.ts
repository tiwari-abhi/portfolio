import { useState, useEffect } from "react";

export type TimeOfDay = "morning" | "afternoon" | "evening" | "night";

export const useTimeOfDay = (): TimeOfDay => {
  const getTimeOfDay = (): TimeOfDay => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) return "morning";
    if (hour >= 12 && hour < 18) return "afternoon";
    if (hour >= 18 && hour < 21) return "evening";
    return "night";
  };

  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>(getTimeOfDay);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeOfDay(getTimeOfDay());
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return timeOfDay;
};

export const getTimeGreeting = (time: TimeOfDay): string => {
  switch (time) {
    case "morning":
      return "Good morning";
    case "afternoon":
      return "Good afternoon";
    case "evening":
      return "Good evening";
    case "night":
      return "Working late?";
  }
};
