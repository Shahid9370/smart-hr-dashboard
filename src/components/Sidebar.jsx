import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r min-h-screen p-6">
      <h1 className="text-xl font-bold mb-8">HR Dashboard</h1>

      <nav className="space-y-3">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/candidates"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          Candidates
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
