
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Medal } from "lucide-react";
import { cn } from "@/lib/utils";
import { Record } from "@/lib/types";

interface PersonalRecordsCardProps {
  records: Record[];
}

export function PersonalRecordsCard({ records }: PersonalRecordsCardProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold">Personal Records</CardTitle>
          <Medal className="h-5 w-5 text-fitness-purple" />
        </div>
      </CardHeader>
      <CardContent className="px-2">
        <div className="space-y-2">
          {records.map((record, index) => (
            <div
              key={record.id}
              className={cn(
                "flex justify-between items-center p-3 rounded-md",
                index % 2 === 0 ? "bg-muted/50" : ""
              )}
            >
              <div className="flex flex-col">
                <span className="font-medium">{record.name}</span>
                <span className="text-sm text-muted-foreground">{record.date}</span>
              </div>
              <div className="font-bold text-fitness-purple">{record.value}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
