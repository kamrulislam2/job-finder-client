import Footer from "@/Pages/Shared/Footer/Footer";
import Nav from "@/Pages/Shared/Nav/Nav";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
