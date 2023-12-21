import { IoMdAdd } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import CreateModal from "../../Modal/CreateModal";
import { useState } from "react";
const TodoList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
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
