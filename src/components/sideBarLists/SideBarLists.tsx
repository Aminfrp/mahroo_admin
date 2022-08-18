import { NavLink } from "react-router-dom";
interface ILinks {
  title: string;
  iconUrl: string;
  url: string;
}
const SideBarLists = ({ menu }: { menu: boolean }) => {
  const navLinks: ILinks[] = [
    { title: "داشبورد", iconUrl: "/icons/dashboard.png", url: "/" },
    { title: "کاربران", iconUrl: "/icons/user.png", url: "/users" },
    { title: "مربیان", iconUrl: "/icons/coach.png", url: "/teachers" },
    { title: "کلاس ها", iconUrl: "/icons/open-book.png", url: "/courses" },
  ];
  return (
    <div className="flex flex-col items-end justify-center pr-3 gap-2 h-full">
      {navLinks.map((link, key) => (
        <NavLink
          className={({ isActive }) => {
            return `hover:bg-[#f5f5f5] rounded-r-full h-16 w-full ${
              isActive ? `bg-[#f5f5f5] rounded-r-full` : `w-full`
            }`;
          }}
          key={key}
          to={link.url}
        >
          <div
            className={`flex py-5 h-full pr-2 ${
              menu ? "justify-center" : "justify-end"
            }  items-center text-right w-full`}
          >
            {!menu && <p className="pr-2 text-md h-full">{link.title}</p>}
            <img
              src={link.iconUrl}
              width="25px"
              className="pr-1 h-full"
              alt={link.title}
            />
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default SideBarLists;
