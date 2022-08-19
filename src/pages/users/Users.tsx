import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import UserCard from "../../components/userCard/UserCard";
import { useGetUsers } from "../../hooks/queries/users/usersQuery";

const Users = () => {
  const { data } = useGetUsers();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-end p-8 md:pr-10 h-full">
      {/* new user */}
      <Button
        style={{
          fontFamily: "vazir",
          borderRadius: "45px",
          width: "200px",
          height: "50px",
        }}
        disableRipple={true}
        variant="contained"
        className="sm:self-center md:self-end"
        color="secondary"
        onClick={() => navigate("new")}
      >
        افزودن کاربر جدید
      </Button>
      {/* users cards */}
      <div className="flex md:justify-end sm:justify-center gap-10 flex-wrap py-10">
        {data?.map((user, key) => (
          <UserCard key={key} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
