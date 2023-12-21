import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className={`bg-[url(https://i.ibb.co/3v75wvZ/hourglass-pile-coins-assortment-1.jpg)] bg-cover bg-center bg-no-repeat h-screen px-6 pt-[40px]`}
    >
      <div className="h-full flex flex-col  justify-center  w-[70%] space-y-3">
        <h1 className="text-2xl font-semibold md:text-3xl lg:text-4xl text-white  ">
          Elevate your productivity with intuitive task management. Streamline
          your workflow and conquer your to-dos effortlessly.
        </h1>
        <Link className="rounded-md bg-gradient-to-r from-pink-500 w-max via-indigo-500 to-yellow-500 p-[2px]">
          <button className="flex h-full  items-center justify-center text-white py-1 px-3 bg-gradient-to-r rounded-md from-violet-500 to-fuchsia-500 font-medium">
            Let's Explore
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
