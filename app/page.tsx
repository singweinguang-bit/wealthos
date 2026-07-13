import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-7xl font-bold tracking-tight">
            WealthOS
          </h1>

          <p className="mt-4 text-slate-400 text-xl">
            Personal Wealth Operating System
          </p>

          <Button className="mt-8">
            Enter Dashboard
          </Button>
        </div>
      </div>
    </main>
  );
}