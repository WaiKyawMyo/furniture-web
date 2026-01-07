import Fooder from "@/components/layouts/Fooder";
import Header from "@/components/layouts/Header";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Header />
      <main className="mt-16 flex-1">
        <Outlet />
      </main>

      <Fooder />
    </div>
  );
};

export default RootLayout;
