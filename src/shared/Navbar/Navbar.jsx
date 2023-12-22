import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/UseAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = async () => {
    await logOut();
    toast.success("Logged out");
  };
  return (
    <div className="flex justify-end gap-8 fixed bg-black bg-opacity-40 w-full max-w-screen-xl mx-auto py-4 px-6 text-white font-medium">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-rose-500" : " "
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/help"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-rose-500" : ""
        }
      >
        Help/Support
      </NavLink>

      {user && <button onClick={handleLogOut}>LogOut</button>}
      {!user && (
        <NavLink
          to="/signin"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-rose-500" : ""
          }
        >
          Login
        </NavLink>
      )}
    </div>
  );
};

export default Navbar;
