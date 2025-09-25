
export interface Answer {
  text: string;
  scores: Partial<Record<PersonalityDimension, number>>;
  icon: string;
}

export interface Question {
  question: string;
  answers: Answer[];
}

export type PersonalityDimension = 'I' | 'E' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

export type PersonalityScores = Record<PersonalityDimension, number>;

export type PersonalityType =
  | 'INTJ' | 'INTP' | 'ENTJ' | 'ENTP'
  | 'INFJ' | 'INFP' | 'ENFJ' | 'ENFP'
  | 'ISTJ' | 'ISFJ' | 'ESTJ' | 'ESFJ'
  | 'ISTP' | 'ISFP' | 'ESTP' | 'ESFP';

export interface SongResult {
  song: string;
  album: string;
  imageUrl: string;
  type: PersonalityType;
  description: string;
}