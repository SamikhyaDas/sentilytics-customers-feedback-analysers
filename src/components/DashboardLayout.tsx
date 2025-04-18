
import { Card } from "@/components/ui/card";
import { BarChart3, MessageSquare, TrendingUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  gradient: string;
}

const StatCard = ({ title, value, icon, gradient }: StatCardProps) => (
  <Card className={`p-6 relative overflow-hidden ${gradient} border-none shadow-lg`}>
    <div className="absolute inset-0 opacity-10 bg-grid-white/10" />
    <div className="relative flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-white/80">{title}</p>
        <h3 className="text-2xl font-bold mt-1 text-white">{value}</h3>
      </div>
      <div className="text-white/80">{icon}</div>
    </div>
  </Card>
);

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
          Customer Feedback Dashboard
        </h1>

        <div className="grid gap-6 mb-8 md:grid-cols-3">
          <StatCard
            title="Total Feedback"
            value="12"
            icon={<MessageSquare className="h-6 w-6" />}
            gradient="bg-gradient-to-br from-blue-500 to-blue-600"
          />
          <StatCard
            title="Positive Rate"
            value="75%"
            icon={<TrendingUp className="h-6 w-6" />}
            gradient="bg-gradient-to-br from-emerald-500 to-emerald-600"
          />
          <StatCard
            title="Average Sentiment"
            value="8.5"
            icon={<BarChart3 className="h-6 w-6" />}
            gradient="bg-gradient-to-br from-violet-500 to-violet-600"
          />
        </div>

        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
