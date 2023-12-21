import List2 from "../../List/List2";
import useGetTask from "../../../hooks/useGetTask";

const OngoingList = () => {
  const { ongoingTodoList, refetch } = useGetTask();
  return (
    <div className="mt-4">
      {ongoingTodoList?.length > 0 ? (
        ongoingTodoList?.map((todo) => (
          <List2 key={todo._id} todo={todo} refetch={refetch} />
        ))
      ) : (
        <p className="text-center my-6 text-xl font-bold  text-rose-400">
          No Task Ongoing
        </p>
      )}
    </div>
  );
};

export default OngoingList;
