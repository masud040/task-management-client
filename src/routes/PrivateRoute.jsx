import { ScaleLoader } from "react-spinners";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { pathname } = useLocation();

  if (loading) {
    return (
      <div
        className="h-[70vh]
    flex 
    flex-col 
    justify-center 
    items-center "
      >
        <ScaleLoader size={100} color="red" />
      </div>
    );
  }
  if (!user && !loading) {
    return <Navigate to="/signin" state={pathname} replace={true} />;
  }
  return children;
};

export default PrivateRoute;
