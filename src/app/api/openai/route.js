import { convertToModelMessages, streamText } from "ai";
import { groq } from "@ai-sdk/groq";

export async function POST(req) {
    try {
        const { messages } = await req.json();

        const result = streamText({
            model: groq("llama-3.1-8b-instant"),
            messages: convertToModelMessages(messages),
        });

        return result.toUIMessageStreamResponse();
    } catch (eror) {
        return new Response("Failed");
    }
}
