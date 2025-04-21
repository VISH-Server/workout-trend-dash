
import { format } from "date-fns";
import { ActivityType, Workout } from "@/lib/types";
import { BarChart, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface WorkoutHistoryItemProps {
  workout: Workout;
}

export function WorkoutHistoryItem({ workout }: WorkoutHistoryItemProps) {
  const getBadgeColor = (type: ActivityType) => {
    switch (type) {
      case "strength":
        return "bg-red-100 text-red-800 hover:bg-red-100";
      case "cardio":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100";
      case "flexibility":
        return "bg-purple-100 text-purple-800 hover:bg-purple-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  return (
    <div className="flex items-center p-4 rounded-lg bg-white shadow-sm mb-3 border border-slate-100 hover:border-fitness-purple transition-all cursor-pointer">
      <div className="h-12 w-12 bg-fitness-soft-gray rounded-full flex items-center justify-center mr-4">
        <span className="text-xl font-bold">{format(workout.date, "d")}</span>
      </div>
      <div className="flex-1">
        <h3 className="font-medium">{workout.name}</h3>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {workout.duration} min
          </span>
          {workout.calories && (
            <span className="flex items-center gap-1">
              <BarChart className="h-4 w-4" />
              {workout.calories} cal
            </span>
          )}
        </div>
      </div>
      <div>
        <Badge className={getBadgeColor(workout.type)} variant="secondary">
          {workout.type}
        </Badge>
      </div>
    </div>
  );
}
