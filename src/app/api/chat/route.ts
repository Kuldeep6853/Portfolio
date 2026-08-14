import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const knowledgeBase = `
My name is Kuldeep Singh. I am a Full Stack Developer.
I have built projects using React, Next.js, Node.js, and AI.
Major projects include a Weather App, an AI Chatbot Agent, and this Portfolio Website.
Skills: React, Next.js, Tailwind CSS, Node.js, Supabase, and AI models.
`;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = typeof body.message === "string" ? body.message.trim() :
      typeof body.query === "string" ? body.query.trim() : "";

    if (!message) {
      return NextResponse.json({ error: "A message is required." }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY ?? process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "The chatbot is not configured yet." }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(`
You are an assistant for Kuldeep Singh's portfolio.
Only answer using the information below. If the question is unrelated, say:
"I can only answer questions about Kuldeep or his portfolio."

Portfolio information:
${knowledgeBase}

User question:
${message}
`);

    return NextResponse.json({ reply: result.response.text() });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ error: "Unable to process the message right now." }, { status: 500 });
  }
}
