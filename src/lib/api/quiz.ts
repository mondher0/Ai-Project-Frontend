import data from "../../data.json";
import { Question } from "../types";
const getQuestions = (url: string): Question[] => {
  //const response = await fetch(url);
  const questionData: Question[] = data;
  return questionData;
};

export default getQuestions;
