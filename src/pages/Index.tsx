
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { WorkoutHistoryItem } from "@/components/dashboard/WorkoutHistoryItem";
import { PersonalRecordsCard } from "@/components/dashboard/PersonalRecordsCard";
import { ProgressChart } from "@/components/dashboard/ProgressChart";
import { mockWorkouts, mockRecords, mockWeightProgress, mockStrengthProgress, mockStats } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { History, Plus } from "lucide-react";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-slate-50">
        <AppSidebar />
        <main className="flex-1 p-6 overflow-y-auto">
          <SidebarTrigger className="mb-6 lg:hidden" />
          
          <DashboardHeader userName="Alex" />
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatsCard
              title="Weekly Workouts"
              value={mockStats.workouts.value}
              change={mockStats.workouts.change}
              positive={mockStats.workouts.positive}
              type="workouts"
            />
            <StatsCard
              title="Active Time"
              value={mockStats.time.value} 
              change={mockStats.time.change}
              positive={mockStats.time.positive}
              type="time"
            />
            <StatsCard
              title="Calories Burned"
              value={mockStats.calories.value}
              change={mockStats.calories.change}
              positive={mockStats.calories.positive}
              type="calories"
            />
            <StatsCard
              title="Strength Gains"
              value={mockStats.strength.value}
              change={mockStats.strength.change}
              positive={mockStats.strength.positive}
              type="strength"
            />
          </div>
          
          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <ProgressChart
              title="Weight Progress"
              data={mockWeightProgress}
              dataKey="value"
              color="#0EA5E9"
            />
            <ProgressChart
              title="Bench Press Progress"
              data={mockStrengthProgress}
              dataKey="value"
              color="#9b87f5"
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Workout History Section */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <History className="h-5 w-5 text-fitness-purple" />
                  <h2 className="text-xl font-bold">Recent Workouts</h2>
                </div>
                <Button variant="outline" size="sm" className="gap-1">
                  <Plus className="h-4 w-4" />
                  Add Workout
                </Button>
              </div>
              <div className="space-y-3">
                {mockWorkouts.map((workout) => (
                  <WorkoutHistoryItem key={workout.id} workout={workout} />
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4">
                View All History
              </Button>
            </div>
            
            {/* Personal Records Section */}
            <div>
              <PersonalRecordsCard records={mockRecords} />
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
