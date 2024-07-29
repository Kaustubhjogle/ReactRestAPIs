import axios from "axios";
import { toast } from "react-toastify";

const CourseInfo = ({ courseData }) => {
  const { title, description, id } = courseData;
  return (
    <div className="rounded-md m-2 p-2 border border-gray-300 shadow-md h-24 justify-center flex flex-col bg-white hover:border-gray-700">
      <div className="text-left relative">
        <span className="ml-2 font-bold absolute">#{id}</span>
      </div>
      <p className="font-bold text-lg">{title}</p>
      {description}
    </div>
  );
};

export const AdvancedCourseInfo = (CourseInfo) => {
  return (props) => {
    const { id } = props.courseData;

    const handleDeleteCourse = (e) => {
      deleteCourse(id);
    };

    const deleteCourse = (id) => {
      axios
        .delete(`http://localhost:8080/courses/${id}`)
        .then((response) => {
          toast.success("Course Deleted Successfully", {
            autoClose: 1500,
            hideProgressBar: true,
          });
          window.location.reload()
        })
        .catch((error) => {
          toast.error(error?.response?.data?.errorMessage);
          console.log(error);
        });
    };

    return (
      <div>
        <div className="relative">
          <button
            className="absolute right-2 top-5 bg-red-400 m-2 p-2 rounded-lg shadow-md hover:cursor-pointer hover:outline outline-1"
            onClick={handleDeleteCourse}
          >
            Delete
          </button>
        </div>
        <CourseInfo {...props} />
      </div>
    );
  };
};

export default CourseInfo;
