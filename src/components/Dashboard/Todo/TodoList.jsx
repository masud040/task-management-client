import { IoMdAdd } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import CreateModal from "../../Modal/CreateModal";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/UseAuth";
const TodoList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  const { data: todoList } = useQuery({
    queryKey: ["tasks", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/tasks/${user?.email}?status=new`
      );
      return data;
    },
  });
  console.log(todoList);
  return (
    <>
      <div className="flex flex-col gap-6 p-2">
        <div>ee</div>
        <button
          onClick={openModal}
          className="flex justify-end w-full"
          title="add new task"
        >
          <IoMdAdd className="text-3xl rounded-md bg-red-300" />
        </button>
      </div>
      <CreateModal closeModal={closeModal} isOpen={isOpen} />
    </>
  );
};

export default TodoList;
