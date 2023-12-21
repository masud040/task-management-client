import { IoMdAdd } from "react-icons/io";

import CreateModal from "../../Modal/CreateModal";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/UseAuth";
import List from "../../List/List";
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
    queryKey: ["tasks", user?.email],
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
      <div className="flex flex-col gap-4">
        {todoList?.map((todo) => (
          <List key={todo._id} refetch={refetch} todo={todo} />
        ))}
        <button className="flex pr-2 justify-end  w-full" title="add new task">
          <IoMdAdd
            onClick={openModal}
            className="text-3xl rounded-md bg-red-300"
          />
        </button>
      </div>
      <CreateModal closeModal={closeModal} isOpen={isOpen} />
    </>
  );
};

export default TodoList;
