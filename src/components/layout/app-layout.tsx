import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/navbar.tsx";
import Footer from "@/components/layout/footer.tsx";
import FloatingDemoCta from "@/components/layout/floating-demo-cta.tsx";

export default function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingDemoCta />
    </div>
  );
}
