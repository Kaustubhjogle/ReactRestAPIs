import { Link, Route, Routes } from "react-router-dom";
import AllCourses from "./AllCourses";
import Home from "./Home";
import AddCourse from "./AddCourse";

const Body = () => {
  return (
    <div className="flex justify-center">
      <div className="innercontainer w-4/6 my-2 rounded-lg shadow-md flex">
        <div className="w-3/12 cursor-pointer">
          <Link to={"/"}>
            <div className="border border-grey p-2 h-10 hover:font-bold">
              Home
            </div>
          </Link>
          <Link to={"/all-courses"}>
            <div className="border border-grey p-2 h-10 hover:font-bold">
              All Courses
            </div>
          </Link>
          <Link to={"/add-course"}>
            <div className="border border-grey p-2 h-10 hover:font-bold">
              Add Course
            </div>
          </Link>
        </div>
        <div className="w-9/12 bg-gray-300">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/all-courses" Component={AllCourses} />
            <Route path="/add-course" Component={AddCourse} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
export default Body;
