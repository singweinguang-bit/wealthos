export default function DashboardHeader() {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Dashboard
        </h1>

        <p className="mt-2 text-neutral-400">
          Welcome back 👋
        </p>
      </div>

      <div className="text-right">
        <p className="text-sm text-neutral-500">
          Net Worth
        </p>

        <h2 className="text-2xl font-bold text-emerald-400">
          RM1,286,520
        </h2>
      </div>
    </div>
  );
}