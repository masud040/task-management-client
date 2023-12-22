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
    <div className="my-6">
      <h1 className="text-center text-3xl font-semibold">
        Who Benefits from Our Platform?
      </h1>
      <div>
        {userBase?.map((benefit) => (
          <BenefitCard key={benefit._id} benefit={benefit} />
        ))}
      </div>
    </div>
  );
};

export default UserBenefit;
