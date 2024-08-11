import { ChatRequest, ChatResponse, ErrorResponse } from '@/types/page';
import { GoogleGenerativeAI, GenerativeModel } from '@google/generative-ai';
import type { NextApiRequest, NextApiResponse } from "next";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey ?? '');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChatResponse | ErrorResponse>
) {
  if (!apiKey) {
    throw new Error('Gemini API key is missing');
  }
  if (req.method !== "POST") {
    console.log("Not post request");

    return res.status(405).json({ message: "Only POST requests are allowed" });
  }
  const { message } = req.body as ChatRequest;
  if (!message) {
    console.log("Message is required");

    return res.status(400).json({ message: "Message is required" });
  }
  try {
    const model: GenerativeModel = await genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(message);
    const response=result.response.text();
    return res.status(200).json({ message: response });
  } catch (error: any) {
    console.log("Error", error);
    res
      .status(500)
      .json({ message: "Error with OpenAI API", error: error.message });
  }
}
