import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/UseAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import List2 from "../../List/List2";

const OngoingList = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  const { data: todoList, refetch } = useQuery({
    queryKey: ["ongoingTasks", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/tasks/${user?.email}?status=ongoing`
      );
      return data;
    },
  });
  return (
    <div className="mt-4">
      {todoList?.length > 0 ? (
        todoList?.map((todo) => (
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
