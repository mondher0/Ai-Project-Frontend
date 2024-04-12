"use client";
import { ResultsProps } from "../types";

const QuizResult = ({ results }: ResultsProps) => {
  const formatResults = () => {
    const { data } = results;
    if (data.length === 0) {
      return "No results";
    } else if (data.length === 1) {
      return data[0];
    } else {
      const last = data.pop();
      return `${data.join(", ")} or ${last}`;
    }
  };

  return (
    <div className="text-center p-8 bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 rounded-lg shadow-xl">
      <p className="text-md mb-2 text-gray-800">The animal is:</p>
      <p className="text-3xl font-bold underline decoration-pink-500 text-gray-800">
        {formatResults()}
      </p>
      <button
        onClick={() => window.location.reload()}
        className="mt-4 bg-green-400 hover:bg-green-500 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      >
        Reset
      </button>
    </div>
  );
};

export default QuizResult;
