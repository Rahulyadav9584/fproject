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

const AddClient = () => {
  const [client, setClient] = useState({ name: "", imageUrl: "", description: "", designation: "" });

  const handleAddClient = async (e) => {
    e.preventDefault();
    if (!client.name || !client.imageUrl || !client.description || !client.designation) {
      toast.error("Please fill all fields");
      return;
    }

    await api.post("/clients", client);
    toast.success("Client added successfully");
    setClient({ name: "", imageUrl: "", description: "", designation: "" });
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gray-500 px-4">
      <form
        onSubmit={handleAddClient}
        className="space-y-6 bg-white bg-opacity-30 backdrop-blur-md p-6 rounded-lg shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-center text-blue-800">Add Client</h2>

        <input
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Client Name"
          value={client.name}
          onChange={(e) => setClient({ ...client, name: e.target.value })}
        />

        <input
          type="file"
          accept="image/*"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={async (e) => {
            const file = e.target.files[0];
            const url = await uploadImageToCloudinary(file);
            setClient({ ...client, imageUrl: url });
          }}
        />

        <input
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Designation"
          value={client.designation}
          onChange={(e) => setClient({ ...client, designation: e.target.value })}
        />

        <textarea
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Description"
          rows={4}
          value={client.description}
          onChange={(e) => setClient({ ...client, description: e.target.value })}
        />

        <button className="w-full bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition">
          Add Client
        </button>
      </form>
    </div>
  );
};

export default AddClient;
