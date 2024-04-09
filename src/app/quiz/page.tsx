import getQuestions from "@/lib/api/quiz";
import QuizCard from "@/lib/components/quiz-card";
import { Question } from "@/lib/types";

export default async function QuizPage() {
  const QuizData: Question[] = getQuestions("url");
  const questions = await QuizData;

  return <QuizCard questions={questions} />;
}
