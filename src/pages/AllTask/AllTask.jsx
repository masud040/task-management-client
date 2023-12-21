import useGetTask from "../../hooks/useGetTask";

const AllTask = () => {
  const { todoList } = useGetTask();

  return (
    <div>
      <h1 className="text-center shadow-xl bg-pink-400 p-1 text-lg font-bold rounded-t-md">
        All Task
      </h1>
      <div className="flex flex-col gap-4">
        {todoList?.map((todo) => (
          <div key={todo._id} className="bg-indigo-300 p-2 min-h-[120px]">
            <div>
              <h1 className=" lg:text-lg font-bold">{todo?.title}</h1>
              <p className="  text-justify">{todo?.descriptions}</p>
              <p>{todo?.deadlines}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
