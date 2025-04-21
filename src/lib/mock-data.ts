
import { Workout, Record, ChartData } from "./types";

// Generate mock workout history
export const mockWorkouts: Workout[] = [
  {
    id: "1",
    name: "Upper Body Strength",
    date: new Date(2023, 3, 15),
    duration: 45,
    type: "strength",
    calories: 320,
  },
  {
    id: "2",
    name: "HIIT Cardio",
    date: new Date(2023, 3, 12),
    duration: 30,
    type: "cardio",
    calories: 450,
  },
  {
    id: "3",
    name: "Yoga Flow",
    date: new Date(2023, 3, 10),
    duration: 60,
    type: "flexibility",
    calories: 180,
  },
  {
    id: "4",
    name: "Lower Body Strength",
    date: new Date(2023, 3, 8),
    duration: 50,
    type: "strength",
    calories: 380,
  },
  {
    id: "5",
    name: "Core Workout",
    date: new Date(2023, 3, 6),
    duration: 25,
    type: "strength",
    calories: 220,
  },
];

// Generate mock personal records
export const mockRecords: Record[] = [
  {
    id: "1",
    name: "Bench Press",
    value: "185 lbs",
    date: "Apr 15, 2023",
  },
  {
    id: "2",
    name: "Deadlift",
    value: "315 lbs",
    date: "Apr 10, 2023",
  },
  {
    id: "3",
    name: "Squat",
    value: "275 lbs",
    date: "Apr 5, 2023",
  },
  {
    id: "4",
    name: "5K Run",
    value: "22:45",
    date: "Apr 2, 2023",
  },
  {
    id: "5",
    name: "Pull-ups",
    value: "12 reps",
    date: "Mar 28, 2023",
  },
];

// Generate mock weight progress data
export const mockWeightProgress: ChartData[] = [
  { date: "Mar 1", value: 175 },
  { date: "Mar 8", value: 173 },
  { date: "Mar 15", value: 172 },
  { date: "Mar 22", value: 170 },
  { date: "Mar 29", value: 169 },
  { date: "Apr 5", value: 168 },
  { date: "Apr 12", value: 167 },
];

// Generate mock strength progress data
export const mockStrengthProgress: ChartData[] = [
  { date: "Mar 1", value: 155 },
  { date: "Mar 8", value: 160 },
  { date: "Mar 15", value: 165 },
  { date: "Mar 22", value: 165 },
  { date: "Mar 29", value: 170 },
  { date: "Apr 5", value: 175 },
  { date: "Apr 12", value: 185 },
];

// Generate mock weekly workout stats
export const mockStats = {
  workouts: {
    value: "12",
    change: "2",
    positive: true,
  },
  time: {
    value: "8.5 hrs",
    change: "1.5 hrs",
    positive: true,
  },
  calories: {
    value: "3,250",
    change: "450",
    positive: true,
  },
  strength: {
    value: "+15%",
    change: "5%",
    positive: true,
  },
};
