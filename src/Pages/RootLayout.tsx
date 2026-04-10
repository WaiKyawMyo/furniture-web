import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className=" flex-1">
        <Outlet />
      </main>
      
      <Footer/>
    </div>
  );
};

export default RootLayout;
