const Logo = ({ menu }: { menu: boolean }) => {
  return (
    <div className="flex flex-col p-3 text-right items-center justify-center h-60">
      <img
        src="/icons/logo.png"
        alt="LOGO"
        className="rounded-[20px] mr-4 mt-4 mb-4"
        width={menu ? "80px" : "100px"}
        height={menu ? "80px" : "100px"}
        style={{ border: "1px solid #CC4115" }}
      />
      <b className="pt-5 text-lg text-center pr-2 ">آموزشگاه زیبایی مهرو</b>
    </div>
  );
};

export default Logo;
