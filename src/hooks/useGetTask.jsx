import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useGetTask = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  const { data: todoList, refetch } = useQuery({
    queryKey: ["tasks", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/tasks/${user?.email}`);
      return data;
    },
  });
  const newTodoList = todoList?.filter((todo) => todo.status === "new");
  const ongoingTodoList = todoList?.filter((todo) => todo.status === "ongoing");
  const completeTodoList = todoList?.filter(
    (todo) => todo.status === "complete"
  );
  return { todoList, newTodoList, ongoingTodoList, completeTodoList, refetch };
};

export default useGetTask;
