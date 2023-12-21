import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const List3 = ({ todo, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const handleDelete = async (id) => {
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
  };

  return (
    <div className="lg:grid grid-cols-3 space-y-2 bg-violet-300 p-2 min-h-[120px] flex  ">
      <div className="col-span-2">
        <h1 className="md:text-lg font-bold">{todo?.title}</h1>
        <p className="md:text-xs text-justify">{todo?.descriptions}</p>
        <p>{todo?.deadlines}</p>
      </div>
      <div className="flex flex-1 flex-col items-end gap-2">
        <button
          onClick={() => handleDelete(todo._id)}
          className="bg-red-500 p-[2px] w-max rounded-md"
        >
          <MdDelete className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default List3;
