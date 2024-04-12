// question type
export type Question = {
  id: number;
  question: string;
  status?: string;
};

// question props
export interface QuestionProps {
  question: Question;
}

// answer type
export type Answer = {
  id: number;
  answer: string;
};

// results type
export type Results = {
  data: string[];
};

// results props
export interface ResultsProps {
  results: Results;
}
