// question type
export type Question = {
  id: number;
  question: string;
  answer: string;
};

// question props
export interface QuestionProps {
  questions: Question[];
}

// answer type
export type Answer = {
  id: number;
  answer: string;
};

