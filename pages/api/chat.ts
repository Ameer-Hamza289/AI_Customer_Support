import  OpenAI  from "openai";
import type { NextApiRequest, NextApiResponse } from "next";

const configuration = {
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
};

const openai = new OpenAI(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {

    console.log('Not post request');
    
    return res.status(405).json({ message: "Only POST requests are allowed" });
  }
  const { message } = req.body;
  if (!message) {
    console.log('Message is required');
    
    return res.status(400).json({ message: "Message is required" });
  }
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });

    const completion = response.choices[0].message?.content;

    res.status(200).json({ message: completion });
  } catch (error: any) {
    console.log("Error",error);
    
    res
      .status(500)
      .json({ message: "Error with OpenAI API", error: error.message });
  }
}
