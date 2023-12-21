import useGetTask from "../../../hooks/useGetTask";
import List3 from "../../List/List3";

const CompleteList = () => {
  const { completeTodoList, refetch } = useGetTask();

  return (
    <div className="mt-4">
      {completeTodoList?.length > 0 ? (
        completeTodoList?.map((todo) => (
          <List3 key={todo._id} todo={todo} refetch={refetch} />
        ))
      ) : (
        <p className="text-center my-6 text-xl font-bold  text-rose-400">
          No Task Completed
        </p>
      )}
    </div>
  );
};

export default CompleteList;
