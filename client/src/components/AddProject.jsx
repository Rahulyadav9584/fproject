import React, { useState } from "react";
import api from "../api/axios";
import { toast } from "react-toastify";

const uploadImageToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "f_preset");

  const res = await fetch("https://api.cloudinary.com/v1_1/dxkhaxmci/image/upload", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  return data.secure_url;
};

const AddProject = () => {
  const [project, setProject] = useState({ name: "", imageUrl: "", description: "" });

  const handleAddProject = async (e) => {
    e.preventDefault();
    if (!project.name || !project.imageUrl || !project.description) {
      toast.error("Please fill all fields");
      return;
    }

    await api.post("/projects", project);
    toast.success("Project added successfully");
    setProject({ name: "", imageUrl: "", description: "" });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-500 px-4">
      <form
        onSubmit={handleAddProject}
        className="space-y-6 bg-white p-6 rounded-lg shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-center text-blue-800">Add New Project</h2>

        <input
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Project Name"
          value={project.name}
          onChange={(e) => setProject({ ...project, name: e.target.value })}
        />

        <input
          type="file"
          accept="image/*"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={async (e) => {
            const file = e.target.files[0];
            const url = await uploadImageToCloudinary(file);
            setProject({ ...project, imageUrl: url });
          }}
        />

        <textarea
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Description"
          rows={4}
          value={project.description}
          onChange={(e) => setProject({ ...project, description: e.target.value })}
        />

        <button className="w-full bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition">
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProject;
