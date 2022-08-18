import { ReactNode, useState } from "react";
import { COLORS } from "../../static/static";
import Header from "../header/Header";
import SideBar from "../sidebar/SideBar";
import BaseStyle from "./Base.module.css";

interface IProps {
  page: ReactNode;
}
const Base = (props: IProps) => {
  const { page } = props;
  const [menu, toggleMenu] = useState(false);
  const user = {
    avatar: "",
  };

  return (
    <div
      className="rounded-[50px] h-full backdrop-blur-xl"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.30)",
        boxShadow: "0px 0px 40px rgba(204, 65, 21, 0.1)",
      }}
    >
      <div className="flex justify-end h-full">
        {/* page */}
        <div className={`grow flex flex-col w-full ${BaseStyle.page} h-full`}>
          <Header
            name="امین فیروزپور"
            email="amin.firouzpour.myself@gmail.com"
            avatar={user.avatar ? user.avatar : "/icons/woman.png"}
            toggleMenu={menu}
            setMenu={toggleMenu}
          />
          <div
            style={{ backgroundColor: COLORS.backGround }}
            className="grow rounded-b-[45px] overflow-auto "
          >
            {page}
          </div>
        </div>
        {/* sidbar */}
        <div
          className={`rounded-[50px] w-60 h-full ${BaseStyle.sidebar} ${
            menu ? "w-32" : "w-40"
          }`}
        >
          <SideBar menu={menu} />
        </div>
      </div>
    </div>
  );
};

export default Base;
