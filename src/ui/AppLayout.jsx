import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet } from "react-router-dom";
import Loader from "./Loader";

const AppLayout = () => {
  // const navigation = useNavigation();
  // const isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      <Loader />
      <Header />
      <main>
        <h1>Content</h1>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
