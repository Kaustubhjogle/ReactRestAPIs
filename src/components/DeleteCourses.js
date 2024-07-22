import React, { useState, useEffect } from "react";
import axios from "axios";
import { AdvancedCourseInfo } from "./CourseInfo";
import CourseInfo from "./CourseInfo";

const DeleteCourses = () => {
  const [courseList, setCourseList] = useState([]);
  const AdvancedCourse = AdvancedCourseInfo(CourseInfo);

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

  if (courseList.length === 0) {
    return <h2 className="text-xl m-2 p-2">No Courses Found</h2>;
  }
  return courseList.map((course) => {
    return <AdvancedCourse courseData={course} />;
    // return <CourseInfo courseData={course} />;
  });
};

export default DeleteCourses;
