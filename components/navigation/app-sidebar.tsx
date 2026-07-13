export default function AppSidebar() {
  return (
    <aside className="w-64 border-r border-slate-800 bg-slate-950 text-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold">
          WealthOS
        </h1>

        <p className="text-sm text-slate-400">
          Personal Wealth OS
        </p>
      </div>

      <nav className="space-y-2 px-4">

        <button className="w-full rounded-lg px-4 py-2 text-left hover:bg-slate-800">
          Dashboard
        </button>

        <button className="w-full rounded-lg px-4 py-2 text-left hover:bg-slate-800">
          Assets
        </button>

        <button className="w-full rounded-lg px-4 py-2 text-left hover:bg-slate-800">
          Investments
        </button>

        <button className="w-full rounded-lg px-4 py-2 text-left hover:bg-slate-800">
          Properties
        </button>

        <button className="w-full rounded-lg px-4 py-2 text-left hover:bg-slate-800">
          Reports
        </button>

      </nav>
    </aside>
  )
}