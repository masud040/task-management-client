import TodoList from "../../components/Dashboard/Todo/TodoList";
import OngoingList from "../../components/Dashboard/Todo/OngoingList";
import CompleteList from "../../components/Dashboard/Todo/CompleteList";

const Todo = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="bg-gray-300 h-screen rounded-md">
        <h1 className="text-center shadow-xl p-1  bg-gray-400 text-lg font-bold rounded-t-md">
          Todo List
        </h1>
        <TodoList />
      </div>
      <div className="bg-gray-300 h-screen rounded-md">
        <h1 className="text-center shadow-xl bg-rose-400 p-1 text-lg font-bold rounded-t-md">
          Ongoing List
        </h1>
        <OngoingList />
      </div>
      <div className="bg-gray-300 h-screen rounded-md">
        <h1 className="text-center shadow-xl bg-pink-400 p-1 text-lg font-bold rounded-t-md">
          Complete List
        </h1>
        <CompleteList />
      </div>
    </div>
  );
};

export default Todo;
