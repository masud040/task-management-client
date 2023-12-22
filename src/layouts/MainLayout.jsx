import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <Navbar />

      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
