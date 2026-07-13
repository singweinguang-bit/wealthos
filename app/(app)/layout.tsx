import AppSidebar from "@/components/navigation/app-sidebar"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-neutral-950">
      <AppSidebar />

      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}