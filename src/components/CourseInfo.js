const CourseInfo = ({ courseData }) => {
  console.log(courseData);
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

export default CourseInfo;
