import { IoMdAdd } from "react-icons/io";

import CreateModal from "../../Modal/CreateModal";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/UseAuth";
import List1 from "../../List/List1";
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

  const { data: todoList, refetch } = useQuery({
    queryKey: ["newTasks", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/tasks/${user?.email}?status=new`
      );
      return data;
    },
  });

  return (
    <>
      <div className="flex flex-col gap-4 mt-4">
        {todoList?.length > 0 ? (
          todoList?.map((todo) => (
            <List1 key={todo._id} todo={todo} refetch={refetch} />
          ))
        ) : (
          <p className="text-center my-6 text-xl font-bold  text-rose-400">
            Please add some task
          </p>
        )}
        <button
          className="flex pr-2 my-2  justify-end  w-full"
          title="add new task"
        >
          <IoMdAdd
            onClick={openModal}
            className="text-3xl rounded-md bg-red-300"
          />
        </button>
      </div>
      <CreateModal closeModal={closeModal} refetch={refetch} isOpen={isOpen} />
    </>
  );
};

export default TodoList;
