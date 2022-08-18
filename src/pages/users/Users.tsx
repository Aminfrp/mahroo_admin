import UserCard from "../../components/userCard/UserCard";
import { useGetUsers } from "../../hooks/queries/users/usersQuery";

const Users = () => {
  const { data } = useGetUsers();

  return (
    <div
      className="flex md:justify-end sm:justify-center gap-10 flex-wrap p-3 md:pr-8 pt-8 h-full"
      style={{ borderTop: "1px solid #" }}
    >
      {data?.map((user, key) => (
        <UserCard key={key} user={user} />
      ))}
    </div>
  );
};

export default Users;
