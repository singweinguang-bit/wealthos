import StatCard from "@/components/dashboard/stat-card";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import NetWorthChart from "@/components/charts/net-worth-chart";

export default function DashboardPage() {
  return (
    <main className="p-8">
         <DashboardHeader />
      


      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Net Worth"
          value="RM1,286,520"
          subtitle="+4.2%"
        />

        <StatCard
          title="Assets"
          value="RM1.92M"
          subtitle="+RM52,300"
        />

        <StatCard
          title="Debt"
          value="RM630K"
        />

        <StatCard
          title="Cash"
          value="RM120K"
        />

        <NetWorthChart />
      </div>
    </main>
  );
}