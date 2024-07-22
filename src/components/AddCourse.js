import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const AddCourse = () => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
  });
 
  const resetForm = () => {
    setFormData({
      id: "",
      title: "",
      description: "",
    });
  }

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddCourse = (e) => {
    e.preventDefault();
    const isAnyFieldEmpty = Object.values(formData).some(
      (value) => value === ""
    );
    if (isAnyFieldEmpty) {
      toast.error("Please fill out all fields.", {
        autoClose: 1500,
        hideProgressBar: true,
      });
    } else {
      axios
        .post("http://localhost:8080/courses", formData)
        .then((response) => {
          resetForm()
          toast.success("Course Added Successfully", {
            autoClose: 1500,
            hideProgressBar: true,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="m-4 p-4">
      <form
        onSubmit={handleAddCourse}
        className="p-4 border-2 border-black rounded-md shadow-md"
      >
        <div className="flex justify-center flex-col text-center items-center">
          <div class="sm:col-span-4 flex w-[300px] justify-between my-2 ">
            <label for="id" class="text-lg font-bold text-gray-900 m-2 w-full">
              ID
            </label>
            <input
              name="id"
              type="number"
              placeholder="Enter ID Number"
              value={formData.id}
              onChange={handleChange}
              className="h-10 rounded-md"
            ></input>
          </div>
          <div class="sm:col-span-4 flex w-[300px] justify-between my-2">
            <label
              for="title"
              class="text-lg font-bold text-gray-900 m-2 w-full"
            >
              Title
            </label>
            <input
              name="title"
              type="text"
              placeholder="Enter Course Title"
              value={formData.title}
              onChange={handleChange}
              className="h-10 rounded-md"
            ></input>
          </div>
          <div class="sm:col-span-4 flex w-[300px] justify-between my-2">
            <label
              for="description"
              class="text-lg font-bold text-gray-900 m-2 w-full"
            >
              Description
            </label>
            <input
              name="description"
              type="text"
              placeholder="Enter Course Description"
              value={formData.description}
              onChange={handleChange}
              className="h-10 rounded-md"
            ></input>
          </div>
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
