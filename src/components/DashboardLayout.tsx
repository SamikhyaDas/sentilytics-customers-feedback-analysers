
import { Card } from "@/components/ui/card";
import { BarChart3, MessageSquare, TrendingUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const StatCard = ({ title, value, icon }: StatCardProps) => (
  <Card className="p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
      </div>
      <div className="text-muted-foreground">{icon}</div>
    </div>
  </Card>
);

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Customer Feedback Dashboard
        </h1>

        <div className="grid gap-6 mb-8 md:grid-cols-3">
          <StatCard
            title="Total Feedback"
            value="12"
            icon={<MessageSquare className="h-6 w-6" />}
          />
          <StatCard
            title="Positive Rate"
            value="75%"
            icon={<TrendingUp className="h-6 w-6" />}
          />
          <StatCard
            title="Average Sentiment"
            value="8.5"
            icon={<BarChart3 className="h-6 w-6" />}
          />
        </div>

        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
