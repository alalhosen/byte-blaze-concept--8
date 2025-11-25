import Nav from "../components/Nav";
import Blogs from "../pages/Blogs";
import Bookmarks from "../pages/Bookmarks";
import Home from "../pages/Home";

const MainLayout = () => {
  return (
    <div>
      <div className="h-16">
        <Nav></Nav>
        <Home></Home>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  );
};

export default MainLayout;
