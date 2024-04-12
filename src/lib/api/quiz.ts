import data from "../../data.json";
import { Question } from "../types";
const getQuestions = async (): Promise<Question> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}animal_classification/faq/`,
  );
  const data = await response.json();

  return data;
};

export default getQuestions;
