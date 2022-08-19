import { COLORS } from "../../static/static";
import HeaderStyle from "./Header.module.css";

interface IProps {
  name: string;
  email: string;
  avatar: string;
  toggleMenu: boolean;
  setMenu: Function;
}
const Header = (props: IProps) => {
  const { name, email, avatar, toggleMenu, setMenu } = props;
  return (
    <div
      style={{
        backgroundColor: COLORS.backGround,
      }}
      className="rounded-t-[45px] h-1/6"
    >
      <div
        className="text-gray-500 h-32 rounded-t-[45px] items-center px-4 sm:px-8 flex justify-end"
        style={{
          backgroundColor: COLORS.backGround,
        }}
      >
        {/* name and email */}
        <div className="flex flex-col items-end jusrify-end w-full h-full overflow-hidden text-ellipsis whitespace-nowrap">
          <p className="text-neutral-900 text-md w-full h-full flex justify-end items-end">
            {name}
          </p>
          <p className="text-xs w-full h-full flex justify-end items-start pt-1 overflow-hidden text-ellipsis whitespace-nowrap">
            {email}
          </p>
        </div>
        {/* profile */}
        <div className="ml-5 rounded-full w-[60px] h-[60px]">
          <img
            src={avatar}
            className="rounded-full"
            alt="Profile"
            style={{ minWidth: "50px", minHeight: "50px" }}
          />
        </div>
        {/* menu icon */}
        <div
          className={`pr-5 h-full items-center jutify-center sm:hidden md:flex ${HeaderStyle.menuIcon}`}
        >
          {toggleMenu ? (
            <img
              src="/icons/menu.png"
              width="20px"
              height="20px"
              alt="Menu"
              className="ml-10"
              onClick={() => setMenu((prev: boolean) => !prev)}
            />
          ) : (
            <img
              src="/icons/close.png"
              width="20px"
              height="20px"
              alt="Menu"
              className="ml-10"
              onClick={() => setMenu((prev: boolean) => !prev)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
