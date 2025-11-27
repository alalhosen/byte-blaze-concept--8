import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
// import Blogs from "../pages/Blogs";
// import Bookmarks from "../pages/Bookmarks";
// import Home from "../pages/Home";

const MainLayout = () => {
  return (
    <div>
      <div className="h-16">
        <Nav></Nav>
      </div>
      {/* packet */}
      <Outlet></Outlet>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
