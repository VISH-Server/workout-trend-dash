
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Activity, BarChart, Clock, TrendingUp } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change?: string;
  positive?: boolean;
  type: "workouts" | "time" | "calories" | "strength";
  className?: string;
}

export function StatsCard({ title, value, change, positive = true, type, className }: StatsCardProps) {
  const getIcon = () => {
    switch (type) {
      case "workouts":
        return <Activity className="h-5 w-5 text-fitness-purple" />;
      case "time":
        return <Clock className="h-5 w-5 text-fitness-blue" />;
      case "calories":
        return <BarChart className="h-5 w-5 text-fitness-orange" />;
      case "strength":
        return <TrendingUp className="h-5 w-5 text-fitness-red" />;
      default:
        return <Activity className="h-5 w-5 text-fitness-purple" />;
    }
  };

  const getBgColor = () => {
    switch (type) {
      case "workouts":
        return "bg-fitness-soft-gray";
      case "time":
        return "bg-fitness-soft-blue";
      case "calories":
        return "bg-orange-50";
      case "strength":
        return "bg-red-50";
      default:
        return "bg-fitness-soft-gray";
    }
  };

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className={`${getBgColor()} p-2 rounded-full`}>{getIcon()}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p className={`text-xs ${positive ? "text-green-500" : "text-red-500"} flex items-center gap-1 mt-1`}>
            {positive ? "+" : "-"}
            {change} from last week
          </p>
        )}
      </CardContent>
    </Card>
  );
}
