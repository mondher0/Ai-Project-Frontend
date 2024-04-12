import getQuestions from "@/lib/api/quiz";
import QuestionCard from "@/lib/components/question-card";
import { Question } from "@/lib/types";

export default async function QuizPage() {
  const QuizData: Promise<Question> = getQuestions();
  const question = await QuizData;

  return <QuestionCard question={question} />;
}

// import getQuestions from "@/lib/api/quiz";
// import QuestionCard from "@/lib/components/question-card";
// import QuizCard from "@/lib/components/quiz-card";
// import { Question, SearchParams } from "@/lib/types";

// export default async function QuizPage({ searchParams }: SearchParams) {
//   const QuizData: Promise<Question> = getQuestions();
//   const question = await QuizData;

//   return (
//     <div
//       className="flex flex-col items-center justify-center min-h-screen"
//       style={{
//         backgroundImage:
//           "url('https://aiworldschool.com/wp-content/uploads/2022/07/MicrosoftTeams-image-13-600x300.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="bg-white bg-opacity-90 shadow-2xl rounded-lg overflow-hidden transform transition-all hover:scale-105 duration-500 max-w-md w-full">
//         <div className="bg-gradient-to-r from-blue-500 to-green-400 p-4 text-white text-center pb-5">
//           <h2 className="text-2xl font-bold">AI Expert System for Animals</h2>
//         </div>
//         <div className="p-6">
//           <div className="mb-6"></div>
//           <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg mb-6 shadow-inner overflow-auto max-h-60">
//             <p className="text-gray-800 text-lg font-medium text-center">ccc</p>
//           </div>
//           <div className="flex justify-around mt-4">
//             <button className="bg-green-400 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-110">
//               Yes
//             </button>
//             <button className="bg-red-400 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-110">
//               No
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
