import React from "react";
import { useNavigate } from "react-router-dom";

const AdminSidebar = ({ selected, onSelect }) => {
  const navigate = useNavigate();

  const menuItems = [
    "Add Project",
    "All Projects",
    "Add Client",
    "All Clients",
    "Contact Submissions",
    "Subscribers",
  ];

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin-login");
  };

  const handleGoToLanding = () => {
    navigate("/"); // 👈 Navigates to Landing Page
  };

  return (
    <div className="w-full md:w-64 bg-blue-800 text-white min-h-screen p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li
              key={item}
              onClick={() => onSelect(item)}
              className={`cursor-pointer px-4 py-2 rounded ${
                selected === item ? "bg-blue-600" : "hover:bg-blue-700"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* 👇 Go to Landing Page Button */}
        <button
          onClick={handleGoToLanding}
          className="mt-6 bg-white text-blue-800 px-4 py-2 rounded hover:bg-gray-100 transition w-full"
        >
          Go to Landing Page
        </button>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="mt-10 bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white w-full"
      >
        Logout
      </button>
    </div>
  );
};

export default AdminSidebar;
