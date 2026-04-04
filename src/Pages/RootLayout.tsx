import Header from "@/components/Layout/Header";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default RootLayout;
