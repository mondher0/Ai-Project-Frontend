// question type
export type Question = {
  id: number;
  question: string;
  status?: string;
};

// question props
export interface QuestionProps {
  questions: Question;
}

// answer type
export type Answer = {
  id: number;
  answer: string;
};

// search params type
export interface SearchParams {
  searchParams: {
    answer: string;
    id: number;
  };
}
