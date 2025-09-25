import { GoogleGenAI } from "@google/genai";
import { SongResult, Answer } from '../types';

if (!process.env.API_KEY) {
  // In a real app, you'd want to handle this more gracefully.
  // For this environment, we assume the key is set.
  console.warn("API_KEY environment variable not set. AI features will not work.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const generateAiDescription = async (songResult: Omit<SongResult, 'aiDescription'>, userAnswers: Answer[]): Promise<string> => {
  const { song, type, description } = songResult;
  
  const answerThemes = userAnswers.map(answer => `- ${answer.text}`).join('\n');

  const prompt = `You are Taylor Swift, writing a personal, heartfelt, and lyrical note to a dear fan.
  You are explaining why the song "${song}" perfectly represents their personality.
  Their personality type is ${type}, which is best described as: "${description}".
  
  To make this even more personal, here are some of the specific choices and feelings they expressed during their journey:
  ${answerThemes}

  Weave these specific themes and ideas into your explanation. Connect their choices to the song's themes, lyrics, and overall feeling.
  Write in a poetic, encouraging, and deeply personal tone, using your signature style of vivid imagery and emotional depth.
  Keep the response to a single, beautiful paragraph. Do not use markdown.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });

    if (response.text) {
      return response.text;
    }
    return "The stars didn't align for a poetic description this time, but your result is still written in the stars!";

  } catch (error) {
    console.error("Error generating content from Gemini API:", error);
    return "It seems like there was a glitch in the matrix... or maybe just a blank space. We couldn't generate your personalized description, but the song choice is what truly matters!";
  }
};