import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_AI_API_KEY);
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const data = await req.json();
    const prompt =
      data.body +
      ". Write a jsx code and use react inline styles and create a modern ui . do not import anything. only write output the code.";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const code = await response.text();
    // console.log(result.response.text());
    // console.log(process.env.GEMINI_AI_API_KEY);
    return NextResponse.json({ code: code });
  } catch (error) {
    console.log(error);
  }
}
