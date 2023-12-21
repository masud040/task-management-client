import { IoMdAdd } from "react-icons/io";

import CreateModal from "../../Modal/CreateModal";
import { useState } from "react";

import List1 from "../../List/List1";
import useGetTask from "../../../hooks/useGetTask";
const TodoList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const { newTodoList, refetch } = useGetTask();

  return (
    <>
      <div className="flex flex-col gap-4 mt-4">
        {newTodoList?.length > 0 ? (
          newTodoList?.map((todo) => (
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
