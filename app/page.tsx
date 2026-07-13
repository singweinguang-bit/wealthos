export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold tracking-tight">
          WealthOS
        </h1>

        <p className="mt-4 text-xl text-slate-400">
          Personal Wealth Operating System
        </p>

        <button className="mt-8 rounded-xl bg-white px-6 py-3 text-black font-semibold hover:bg-gray-200 transition">
          Enter Dashboard
        </button>
      </div>
    </main>
  )
}