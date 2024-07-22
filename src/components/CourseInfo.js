import axios from "axios";

const CourseInfo = ({ courseData }) => {
  const { title, description, id } = courseData;
  return (
    <div className="rounded-md m-2 p-2 border border-gray-300 shadow-md h-24 justify-center flex flex-col bg-white hover:border-gray-700">
      <div className="text-left absolute">
        <span className="ml-2 font-bold">#{id}</span>
      </div>
      <p className="font-bold text-lg">{title}</p>
      {description}
    </div>
  );
};

export const AdvancedCourseInfo = (CourseInfo) => {
  return (props) => {
    const { title, description, id } = props.courseData;

    const handleDeleteCourse = (e) => {
      console.log(id);
      console.log(props);
      deleteCourse(id);
    };

    const deleteCourse = (id) => {
      axios
        .delete(`http://localhost:8080/courses/${id}`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
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
