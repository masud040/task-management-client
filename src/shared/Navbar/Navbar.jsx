import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-end gap-8 fixed bg-black bg-opacity-40 w-full max-w-screen-xl mx-auto py-2 px-6 text-white font-medium">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/help"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Help/Support
      </NavLink>
      <NavLink
        to="/signin"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Login
      </NavLink>
    </div>
  );
};

export default Navbar;
