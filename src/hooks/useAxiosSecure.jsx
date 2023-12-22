import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://task-management-server-ten-amber.vercel.app",
  withCredentials: true,
});
const useAxiosSecure = () => {
  return axiosInstance;
};

export default useAxiosSecure;
