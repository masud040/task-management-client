import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className={`bg-[url(https://i.ibb.co/3v75wvZ/hourglass-pile-coins-assortment-1.jpg)] bg-cover bg-center bg-no-repeat h-screen pt-[56px] hero`}
    >
      <div className="hero-overlay bg-opacity-60 px-8">
        <div className="h-full flex flex-col  justify-center  w-[70%] space-y-3 ">
          <h1 className="text-2xl font-semibold md:text-3xl lg:text-4xl text-white  ">
            Elevate your productivity with intuitive task management. Streamline
            your workflow and conquer your to-dos effortlessly.
          </h1>
          <Link
            to="/dashboard"
            className="rounded-md bg-gradient-to-r from-pink-500 w-max via-indigo-500 to-yellow-500 p-[2px]"
          >
            <button className="flex h-full  items-center justify-center text-gray-800 text-lg py-2 px-8 bg-gradient-to-r rounded-md from-violet-500 to-fuchsia-500 font-bold">
              Let's Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
