import type { NextApiRequest, NextApiResponse } from "next";
const keyGroq = process.env.keyGroq;

import Groq from "groq-sdk";

const groq = new Groq({ apiKey: keyGroq });

export async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: "tell me your model name",
      },
    ],
    model: "llama3-70b-8192",
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("api is hit");
  if (req.method !== "POST") {
    console.log("Not post request");

    return res.status(405).json({ message: "Only POST requests are allowed" });
  }
  const { message } = req.body;
  if (!message) {
    console.log("Message is required");

    return res.status(400).json({ message: "Message is required" });
  }
  try {
    const chatCompletion = await getGroqChatCompletion();
    const completion = chatCompletion.choices[0]?.message?.content || "";
    res.status(200).json({ message: completion });
  } catch (error: any) {
    console.log("Error", error);

    res
      .status(500)
      .json({ message: "Error with OpenAI API", error: error.message });
  }
}
