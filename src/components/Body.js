import { Link, Route, Routes } from "react-router-dom";
import AllCourses from "./AllCourses";
import Home from "./Home";
import AddCourse from "./AddCourse";
import DeleteCourses from "./DeleteCourses";

const Body = () => {
  return (
    <div className="flex justify-center">
      <div className="innercontainer w-4/6 my-2 rounded-lg shadow-md shadow-gray-300 flex h-[36rem] overflow-hidden">
        <div className="left-nav w-3/12 cursor-pointer">
          <Link to={"/"}>
            <div className="border border-grey p-2 h-12 hover:font-bold flex items-center justify-center">
              Home
            </div>
          </Link>
          <Link to={"/all-courses"}>
            <div className="border border-grey p-2 h-12 hover:font-bold flex items-center justify-center">
              All Courses
            </div>
          </Link>
          <Link to={"/add-course"}>
            <div className="border border-grey p-2 h-12 hover:font-bold flex items-center justify-center">
              Add Course
            </div>
          </Link>
          <Link to={"/delete-courses"}>
            <div className="border border-grey p-2 h-12 hover:font-bold flex items-center justify-center">
              Delete Course
            </div>
          </Link>
        </div>
        <div className="right-main-container w-9/12 bg-gray-300 scroll-auto overflow-auto">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/all-courses" Component={AllCourses} />
            <Route path="/add-course" Component={AddCourse} />
            <Route path="/delete-courses" Component={DeleteCourses} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
export default Body;
