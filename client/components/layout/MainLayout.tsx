import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      {/* Sidebar */}
      <Sidebar />

      {/* Right Side */}
      <div className="flex flex-1 flex-col">

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 bg-slate-950 min-h-screen overflow-y-auto">

          <div className="mx-auto max-w-7xl px-8 py-10">
            {children}
          </div>
          
        </main>

      </div>

    </div>
  );
}