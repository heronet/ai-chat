import { OpenAIStream, StreamingTextResponse } from "ai";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = "edge";

export async function POST(req: Request) {
  let { messages } = await req.json();
  messages = messages.slice(-6);
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "system",
        content:
          "You are Shakespeare. Whatever asked, answer using shakespearean language.",
      },
      ...messages,
    ],
    max_tokens: 150,
  });
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
