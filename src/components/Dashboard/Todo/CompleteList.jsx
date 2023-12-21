import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/UseAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import List3 from "../../List/List3";

const CompleteList = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  const { data: todoList, refetch } = useQuery({
    queryKey: ["completeTasks", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/tasks/${user?.email}?status=complete`
      );
      return data;
    },
  });

  return (
    <div>
      {todoList?.length > 0 ? (
        todoList?.map((todo) => (
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
