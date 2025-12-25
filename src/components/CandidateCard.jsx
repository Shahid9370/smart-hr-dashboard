const CandidateCard = ({ candidate }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border hover:shadow-md transition">
      <h3 className="text-lg font-semibold mb-1">
        {candidate.name}
      </h3>

      <p className="text-sm text-gray-600 mb-1">
        {candidate.role}
      </p>

      <p className="text-sm text-gray-500 mb-2">
        Experience: {candidate.experience} years
      </p>

      <span
        className={`inline-block px-3 py-1 text-xs rounded-full font-medium
          ${
            candidate.status === "Shortlisted"
              ? "bg-green-100 text-green-700"
              : candidate.status === "Interview"
              ? "bg-yellow-100 text-yellow-700"
              : candidate.status === "Rejected"
              ? "bg-red-100 text-red-700"
              : "bg-blue-100 text-blue-700"
          }
        `}
      >
        {candidate.status}
      </span>
    </div>
  );
};

export default CandidateCard;
