import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaHourglassStart } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import EditModal from "../Modal/EditModal";
import { useState } from "react";
import Swal from "sweetalert2";
const List1 = ({ todo, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);

  const handleOnGoing = async (id) => {
    const toastId = toast.loading("Task ongoing...");
    const tasks = {
      status: "ongoing",
    };
    const { data } = await axiosSecure.patch(`/tasks/${id}`, tasks);
    if (data.modifiedCount > 0) {
      toast.success("Task ongoing", {
        id: toastId,
      });
      refetch();
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const toastId = toast.loading("Task deleting...");
        const tasks = {
          status: "delete",
        };
        const { data } = await axiosSecure.patch(`/tasks/${id}`, tasks);
        if (data.modifiedCount > 0) {
          toast.success("Task deleted", {
            id: toastId,
          });
          refetch();
        }
      }
    });
  };
  return (
    <>
      <div className="md:grid grid-cols-3 space-y-2 bg-violet-400 p-2 min-h-[120px] flex  justify-between">
        <div className="col-span-2">
          <h1 className=" md:text-lg font-bold">{todo?.title}</h1>
          <p className=" md:text-xs text-justify">{todo?.descriptions}</p>
          <p>{todo?.deadlines}</p>
        </div>
        <div className="flex flex-1 flex-col items-end gap-2">
          <button
            onClick={() => setIsOpen(true)}
            title="edit task"
            className="bg-blue-500 p-[2px] w-max rounded-md"
          >
            <FaEdit className="text-xl " />
          </button>
          <button
            onClick={() => handleDelete(todo._id)}
            title="delete task"
            className="bg-red-500 p-[2px] w-max rounded-md"
          >
            <MdDelete className="text-xl" />
          </button>
          <button
            title="ongoing task"
            onClick={() => handleOnGoing(todo._id)}
            className="bg-green-500 p-[2px] w-max rounded-md"
          >
            <FaHourglassStart className="text-xl" />
          </button>
        </div>
      </div>
      <EditModal
        isOpen={isOpen}
        todo={todo}
        closeModal={closeModal}
        refetch={refetch}
      />
    </>
  );
};

export default List1;
