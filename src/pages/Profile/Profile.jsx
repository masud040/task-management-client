import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col  items-center bg-gradient-to-r from-violet-500 w-60 rounded-lg p-4 to-fuchsia-500 h-56 ">
        <img
          className="h-24 w-24 rounded-full mb-3"
          src={user?.photoURL}
          alt=""
        />
        <h1 className="text-xl font-semibold">{user?.displayName}</h1>
        <p className="text-lg font-medium">{user?.email}</p>
      </div>
    </div>
  );
};

export default Profile;
