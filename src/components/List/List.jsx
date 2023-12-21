import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaHourglassStart } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const List = ({ todo, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const [show, setShow] = useState(false);
  const handleOnGoing = async (id) => {
    const task = {
      status: "ongoing",
    };
    const { data } = await axiosSecure.patch(`/tasks/${id}`, task);
    console.log(data);
  };
  return (
    <div className="lg:grid grid-cols-3 space-y-2 bg-violet-400 p-1">
      <div className="col-span-2">
        <h1 className="text-sm lg:text-lg font-bold">{todo?.title}</h1>
        <p className="text-xs text-justify">
          {show ? todo?.descriptions : todo?.descriptions.slice(0, 28)}
          {todo?.descriptions.length > 20 && (
            <span
              onClick={() => setShow(true)}
              className={`${
                show ? "hidden" : "bg-rose-400 ms-1 rounded-md px-1"
              }
              `}
            >
              more
            </span>
          )}
        </p>
      </div>
      <div className="flex lg:flex-col justify-between items-end gap-2">
        <button className="bg-blue-500 p-[2px] w-max rounded-md">
          <FaEdit className="text-xl " />
        </button>
        <button className="bg-red-500 p-[2px] w-max rounded-md">
          <MdDelete className="text-xl" />
        </button>
        <button
          onClick={() => handleOnGoing(todo._id)}
          className="bg-red-500 p-[2px] w-max rounded-md"
        >
          <FaHourglassStart className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default List;
