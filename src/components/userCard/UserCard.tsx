import { Card } from "@mui/material";
import moment from "jalali-moment";
import { useState } from "react";
import { IUser } from "../../interfaces/interfaces";
import { baseURL, COLORS } from "../../static/static";

const UserCard = ({ user }: { user: IUser }) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  return (
    <Card
      className={`min-w-[250px] h-[400px] flex justify-center items-end hover:cursor-pointer`}
      style={{
        borderRadius: "20px",
        backgroundColor: "#FAE5E5",
        transition: "ease 0.5s",
        backgroundImage: `url(${
          baseURL?.slice(0, baseURL?.indexOf("/api")) + "/" + user.avatar
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* info */}
      <div
        className={`flex justify-end items-end flex-col bg-gradient-to-t from-[#000] to-[#0000] w-full p-3 backdrop-blur-sm ${
          showDetails ? "h-[180px]" : "h-[100px]"
        }`}
        style={{ transition: "height ease 0.5s" }}
      >
        <p className="mb-1 text-[#ffff]">{user.name}</p>
        <p className="mb-1 text-xs text-[#ffff]">09{user.phoneNumber}</p>
        {showDetails && (
          <>
            <p className="text-xs text-[#ffff] w-[180px] mb-1 text-right whitespace-nowrap overflow-hidden text-ellipsis">
              {user.email}
            </p>
            <p className="mb-1 text-xs text-[#ffff]">{user.code}</p>
            <p className="mb-1 text-xs text-[#ffff]">
              {moment(user.createdAt, "YYYY/MM/DD")
                .locale("fa")
                .format("YYYY/MM/DD dddd")}
            </p>
            <div className="mb-1 text-[#ffff]">
              {user.courses.map((courese, key) => (
                <p key={key}>{courese.name}</p>
              ))}
            </div>
          </>
        )}
        <p
          onClick={() => setShowDetails((prev) => !prev)}
          className={`flex self-center mt-2`}
          style={{ color: COLORS.secondary }}
        >
          نمایش بیشتر
        </p>
      </div>
      {/* actions */}
      <div></div>
    </Card>
  );
};

export default UserCard;
