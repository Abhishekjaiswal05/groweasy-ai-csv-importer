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
        <main className="flex-1 overflow-y-auto bg-slate-950 p-8">
          {children}
        </main>

      </div>

    </div>
  );
}