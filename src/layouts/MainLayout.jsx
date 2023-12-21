import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <Navbar />

      <Outlet />
    </div>
  );
};

export default MainLayout;
