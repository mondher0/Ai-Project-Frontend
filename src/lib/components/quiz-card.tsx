"use client";
import { useState, useEffect } from "react";
import { Answer, Question, QuestionProps } from "../types";
import QuizResult from "./quiz-result";

export default function QuizCard({ questions }: QuestionProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question>(
    questions[0],
  );
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<Answer[]>([]);

  useEffect(() => {
    setCurrentQuestion(questions[currentQuestionIndex]);
  }, [currentQuestionIndex, questions]);

  const handleAnswer = (answer: Answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const renderQuestion = () => (
    <>
      <div className="bg-gradient-to-r from-green-100 to-blue-100 bg-opacity-90 p-4 md:p-6 rounded-lg mb-4 md:mb-6 shadow-inner overflow-auto max-h-60">
        <p className="text-gray-800 text-base md:text-lg font-medium text-center">
          {currentQuestion.question}
        </p>
      </div>
      <div className="flex justify-around mt-2 md:mt-4">
        <button
          onClick={() =>
            handleAnswer({ id: currentQuestion.id, answer: "Yes" })
          }
          className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          Yes
        </button>
        <button
          onClick={() => handleAnswer({ id: currentQuestion.id, answer: "No" })}
          className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          No
        </button>
      </div>
    </>
  );

  if (!currentQuestion) return null; // Or some loading indicator

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundImage:
          "url('https://aiworldschool.com/wp-content/uploads/2022/07/MicrosoftTeams-image-13-600x300.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="backdrop-filter backdrop-blur-lg bg-white bg-opacity-60 shadow-2xl rounded-lg overflow-hidden transform transition-all hover:scale-105 duration-500 max-w-md w-full">
        <div className="bg-opacity-90 bg-gradient-to-r from-blue-500 to-green-400 p-4 text-white text-center pb-5">
          <h2 className="text-2xl font-bold">AI Expert System for Animals</h2>
        </div>
        <div className="p-6">
          {!showResult ? renderQuestion() : <QuizResult />}
        </div>
      </div>
    </div>
  );
}
