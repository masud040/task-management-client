import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import BenefitCard from "../Card/BenefitCard";

const UserBenefit = () => {
  const axiosSecure = useAxiosSecure();
  const { data: userBase } = useQuery({
    queryKey: ["userBase"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/userBase");
      return data;
    },
  });

  return (
    <div className="my-10">
      <h1 className="text-center text-3xl font-semibold">
        Who Benefits from Our Platform?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {userBase?.map((benefit) => (
          <BenefitCard key={benefit._id} benefit={benefit} />
        ))}
      </div>
    </div>
  );
};

export default UserBenefit;
