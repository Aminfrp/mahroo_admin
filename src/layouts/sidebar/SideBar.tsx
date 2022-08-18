import Logo from "../../components/logo/Logo";
import SideBarLists from "../../components/sideBarLists/SideBarLists";

const SideBar = ({ menu }: { menu: boolean }) => {
  return (
    <div className={`h-full flex flex-col overflow-auto`}>
      <Logo menu={menu} />
      {/* lists */}
      <SideBarLists menu={menu} />
    </div>
  );
};

export default SideBar;
