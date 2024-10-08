import ActionButtons from "./action-buttons";
import Logo from "./logo";
import { NavigationMenuBar } from "./navigation-bar";

const Navbar = () => {
  return (
    <div className="fixed z-50 flex w-full bg-white p-2 md:justify-evenly">
      <Logo />
      <NavigationMenuBar />
      {/* <ActionButtons /> */}
    </div>
  );
};

export default Navbar;
