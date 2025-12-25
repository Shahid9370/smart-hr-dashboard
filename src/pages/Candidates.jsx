import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import CandidateCard from "../components/CandidateCard";
import { candidatesData } from "../data/candidatesData";

const Candidates = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-6">
          <h1 className="text-2xl font-bold mb-6">
            Candidates
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {candidatesData.map((candidate) => (
              <CandidateCard
                key={candidate.id}
                candidate={candidate}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Candidates;
