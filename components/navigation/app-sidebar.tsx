import Link from "next/link";

export default function AppSidebar() {
  return (
    <aside className="w-64 border-r border-slate-800 bg-slate-950 text-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold">WealthOS</h1>

        <p className="text-sm text-slate-400">
          Personal Wealth OS
        </p>
      </div>

      <nav className="space-y-2 px-4">

        <Link
          href="/dashboard"
          className="block rounded-lg px-4 py-2 text-white hover:bg-slate-800 hover:text-white"
        >
          Dashboard
        </Link>

        <Link
          href="/assets"
          className="block rounded-lg px-4 py-2 hover:bg-slate-800"
        >
          Assets
        </Link>

        <Link
          href="/investments"
          className="block rounded-lg px-4 py-2 hover:bg-slate-800"
        >
          Investments
        </Link>

        <Link
          href="/properties"
          className="block rounded-lg px-4 py-2 hover:bg-slate-800"
        >
          Properties
        </Link>

        <Link
          href="/reports"
          className="block rounded-lg px-4 py-2 hover:bg-slate-800"
        >
          Reports
        </Link>

      </nav>
    </aside>
  );
}