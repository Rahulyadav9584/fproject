import React, { useEffect, useState } from "react";
import api from "../api/axios";
import { toast } from "react-toastify";

const ClientsSection = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await api.get("/clients");
        setClients(res.data);
      } catch (err) {
        toast.error("Failed to load clients");
      }
    };
    fetchClients();
  }, []);

  return (
    <section className="py-16 bg-white text-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-blue-800 mb-2">Happy Clients</h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto mb-10 rounded-full"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {clients.map((c) => (
          <div
            key={c._id}
            className="bg-white rounded-lg shadow-lg p-5 text-left border hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center gap-4 mb-3">
              <img
                src={c.imageUrl}
                alt={c.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-blue-700 text-sm">{c.name}</h4>
                <p className="text-xs text-gray-500">{c.designation}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 italic">
              “{c.description.length > 150 ? c.description.slice(0, 140) + "..." : c.description}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
