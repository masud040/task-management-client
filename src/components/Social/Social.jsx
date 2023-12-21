import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const Social = ({ state }) => {
  const navigate = useNavigate();
  const { signInWithSocial } = useAuth();
  const handleSocialLogin = async (provider) => {
    await signInWithSocial(provider);
    toast.success("Login successful");
    navigate(state ? state : "/");
  };
  return (
    <div>
      <div
        onClick={() => handleSocialLogin(googleProvider)}
        className=" w-full rounded-md bg-gradient-to-r from-[#3a4cd8] my-3 via-indigo-500 to-[#9058e7] p-[1px] "
      >
        <div className=" justify-center items-center space-x-2  bg-[#131237] p-1 border-rounded cursor-pointer flex h-full rounded-md w-full back">
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
      </div>
      <div
        onClick={() => handleSocialLogin(githubProvider)}
        className=" w-full rounded-md bg-gradient-to-r from-[#3a4cd8] my-3 via-indigo-500 to-[#9058e7] p-[1px] "
      >
        <div className=" justify-center items-center space-x-2  bg-[#131237] p-1 border-rounded cursor-pointer flex h-full rounded-md w-full back">
          <FaGithub size={32} />

          <p>Continue with Github</p>
        </div>
      </div>
    </div>
  );
};

export default Social;
