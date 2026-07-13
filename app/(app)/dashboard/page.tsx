import StatCard from "@/components/dashboard/stat-card";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import NetWorthChart from "@/components/charts/net-worth-chart";
import AssetAllocationChart from "@/components/charts/asset-allocation-chart";


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
        <div className="mt-6 grid gap-6 xl:grid-cols-2">
    <AssetAllocationChart />

    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
        <h2 className="mb-6 text-xl font-semibold text-white">
            Recent Activity
        </h2>

        <div className="space-y-4">

            <div className="flex justify-between">
                <span>Dividend Received</span>
                <span className="text-emerald-400">
                    +RM2,350
                </span>
            </div>

            <div className="flex justify-between">
                <span>Mortgage Payment</span>
                <span className="text-red-400">
                    -RM2,301
                </span>
            </div>

            <div className="flex justify-between">
                <span>Salary</span>
                <span className="text-emerald-400">
                    +RM8,000
                </span>
            </div>

            <div className="flex justify-between">
                <span>Rental Income</span>
                <span className="text-emerald-400">
                    +RM2,200
                </span>
            </div>

        </div>
    </div>
</div>
      </div>
    </main>
  );
}