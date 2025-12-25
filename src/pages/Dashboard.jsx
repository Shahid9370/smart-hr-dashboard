import StatsCard from "../components/StatsCard";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-6">
          <h1 className="text-2xl font-bold mb-6">
            Dashboard Overview
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatsCard
              title="Total Candidates"
              value="120"
              color="text-blue-600"
            />
            <StatsCard
              title="Shortlisted"
              value="45"
              color="text-green-600"
            />
            <StatsCard
              title="Interviews"
              value="20"
              color="text-yellow-500"
            />
            <StatsCard
              title="Rejected"
              value="55"
              color="text-red-500"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
