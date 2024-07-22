import axios from "axios";
import React, { useState } from "react";

const AddCourse = () => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddCourse = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/courses", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="m-4 p-4">
      <form onSubmit={handleAddCourse}>
        <div class="sm:col-span-4">
          <label
            for="id"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            ID
          </label>
          <input
            name="id"
            type="number"
            placeholder="Enter ID Number"
            value={formData.id}
            onChange={handleChange}
          ></input>
        </div>
        <div class="sm:col-span-4">
          <label
            for="title"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Title
          </label>
          <input
            name="title"
            type="text"
            placeholder="Enter Course Title"
            value={formData.title}
            onChange={handleChange}
          ></input>
        </div>
        <div class="sm:col-span-4">
          <label
            for="description"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Description
          </label>
          <input
            name="description"
            type="text"
            placeholder="Enter Course Description"
            value={formData.description}
            onChange={handleChange}
          ></input>
        </div>
        <div class="sm:col-span-4 m-2">
          <button
            type="submit"
            className="rounded-lg bg-blue-500 text-white p-2"
            onClick={handleAddCourse}
          >
            Add Course
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddCourse;
