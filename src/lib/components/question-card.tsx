"use client";
import { useState } from "react";
import { Answer, Question, QuestionProps, Results } from "../types";
import QuizResult from "./quiz-result";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

export default function QuestionCard({ question }: QuestionProps) {
  const [currentQuestion, setCurrentQuestion] = useState<Question>(question);
  const [showResult, setShowResult] = useState(false);
  const [results, setResults] = useState<Results>({ data: [] });
  const [loading, setLoading] = useState(false);

  const handleAnswer = async (answer: Answer) => {
    console.log(answer);
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}animal_classification/faq/`,
        answer,
      );
      console.log(response);
      const data: Question = response.data;
      setCurrentQuestion(data);
      setLoading(false);
      if (data.status === "end") {
        setCurrentQuestion({
          id: 0,
          question: "Wait for the result...",
        });
        const response = await axios(
          `${process.env.NEXT_PUBLIC_BASE_URL}animal_classification/result/`,
        );
        setShowResult(true);
        console.log(response.data);
        setResults(response.data);
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderQuestion = () => (
    <>
      <div className="bg-gradient-to-r from-green-100 to-blue-100 bg-opacity-90 p-4 md:p-6 rounded-lg mb-4 md:mb-6 shadow-inner overflow-auto max-h-60">
        {loading ? (
          <Skeleton />
        ) : (
          <p className="text-gray-800 text-base md:text-lg font-medium text-center">
            {currentQuestion.question}
          </p>
        )}
      </div>
      <div className="flex justify-around mt-2 md:mt-4">
        <button
          onClick={() =>
            handleAnswer({ id: currentQuestion.id, answer: "yes" })
          }
          className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          Yes
        </button>
        <button
          onClick={() => handleAnswer({ id: currentQuestion.id, answer: "no" })}
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
          {!showResult ? renderQuestion() : <QuizResult results={results} />}
        </div>
      </div>
    </div>
  );
}
