import React, { useEffect, useState } from "react";
import CourseInfo from "./CourseInfo";
import axios from "axios";

function AllCourses() {
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/courses")
      .then((response) => {
        console.log(response);
        setCourseList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if(courseList.length === 0 ){
    return(
      <h2 className="text-xl m-2 p-2">No Courses Found</h2>
    )
  }

  return (
    <div>
      {courseList.map((course) => {
        return <CourseInfo courseData={course} />;
      })}
    </div>
  );
}

export default AllCourses;
