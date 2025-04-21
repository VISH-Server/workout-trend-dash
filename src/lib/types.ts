
export type ActivityType = "strength" | "cardio" | "flexibility" | "other";

export interface Workout {
  id: string;
  name: string;
  date: Date;
  duration: number;
  type: ActivityType;
  calories?: number;
  notes?: string;
}

export interface Record {
  id: string;
  name: string;
  value: string;
  date: string;
}

export interface ChartData {
  date: string;
  value: number;
}
