export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white bg-opacity-80 rounded-lg shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Welcome to the AI expert system for animals!
        </h1>
        <p className="text-gray-600 text-center mb-8">
          I can give you the animal name based on the questions you answer.
        </p>
        <div className="flex justify-center">
          <a
            href="/quiz"
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
          >
            Start Quiz
          </a>
        </div>
      </div>
    </div>
  );
}
