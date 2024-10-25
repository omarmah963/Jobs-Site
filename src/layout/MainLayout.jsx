import { Outlet } from "react-router-dom";
import NavNar from "../components/Navbar";
const MainLayout = () => {
  return (
    <>
      <NavNar />
      <Outlet />
    </>
  );
};

export default MainLayout;
