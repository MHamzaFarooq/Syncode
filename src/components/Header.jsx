import LogoSVG from "@/assets/Logo";

const Header = () => {
  return (
    <header className="flex items-center w-full gap-4 p-6 sm:p-9">
      <LogoSVG />
      <div className="text-white">Syncode</div>
    </header>
  );
};
export default Header;
