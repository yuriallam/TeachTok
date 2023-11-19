export interface ForYouResponse {
  type: string;
  id: number;
  playlist: string;
  description: string;
  image: string;
  question: string;
  options: {
    id: string;
    answer: string;
  }[];
  user: {
    name: string;
    avatar: string;
  };
  correct_options?: CorrectAnswerResponse;
}

export interface CorrectAnswerResponse {
  id: string;
  answer: string;
}
