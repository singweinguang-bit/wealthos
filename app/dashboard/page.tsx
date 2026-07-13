import AppHeader from "@/components/layout/app-header";
import AppSidebar from "@/components/layout/app-sidebar";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <AppSidebar />

      <div className="flex-1">

        <AppHeader />

        <main className="p-8">

          <h1 className="text-4xl font-bold">
            Net Worth
          </h1>

          <p className="mt-3 text-slate-400">
            RM 1,250,000
          </p>

        </main>

      </div>

    </div>
  );
}