import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

const Header = () => {
  return (
    <header className="flex h-14 items-center border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        DomiHut Pizza
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;
