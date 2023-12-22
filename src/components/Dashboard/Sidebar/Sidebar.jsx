import { useState } from "react";

import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import MenuItem from "../MenuItem/MenuItem";
import { MdAddTask } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
const Sidebar = () => {
  const [isActive, setActive] = useState(false);
  const { logOut } = useAuth();

  const handleToggle = () => {
    setActive(!isActive);
  };
  const handleLogOut = async () => {
    await logOut();
    toast.success("Logged out");
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div className="block cursor-pointer p-4 font-bold">
          <Link to="/">Task Manager</Link>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto text-lg font-bold">
              <Link to="/">Task Manager</Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-8">
            {/* If a user is host */}

            <nav>
              <MenuItem
                icon={MdAddTask}
                label="Manage Task"
                address="/dashboard"
              />
            </nav>
            <nav>
              <MenuItem
                icon={FaTasks}
                label="See All Task"
                address="/dashboard/all-task"
              />
            </nav>
          </div>
        </div>

        <div>
          <hr />

          <MenuItem
            icon={FcSettings}
            label="Profile"
            address="/dashboard/profile"
          />
          <button
            onClick={handleLogOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
