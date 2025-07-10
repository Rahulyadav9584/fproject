import React, { useEffect, useState } from "react";
import api from "../api/axios";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await api.get("/projects");
      setProjects(res.data);
    };
    fetchProjects();
  }, []);

  return (
    <section className="py-16 bg-blue-50 text-center px-4">
      <h2 className="text-3xl font-bold text-blue-800 mb-2">Our Projects</h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto mb-4 rounded-full"></div>
      <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
        We know what buyers are looking for and suggest projects that will bring clients top dollar for the sale of their homes.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {projects.map((p) => (
          <div key={p._id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <img src={p.imageUrl} alt={p.name} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <h3 className="text-blue-700 font-semibold text-lg mb-1">{p.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{p.description}</p>
              <button className="mt-auto px-4 py-2 bg-orange-500 text-white text-sm rounded hover:bg-orange-600 transition">
                READ MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
