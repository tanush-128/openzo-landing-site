import ActionButtons from "./action-buttons";
import Logo from "./logo";
import { NavigationMenuBar } from "./navigation-bar";

const Navbar = () => {
  return (
    <div className="flex md:justify-evenly p-2 w-full fixed bg-white z-50">
      <Logo />
      <NavigationMenuBar />
      {/* <ActionButtons /> */}
    </div>
  );
};

export default Navbar;
