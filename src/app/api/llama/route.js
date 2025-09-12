import { convertToModelMessages, streamText } from "ai";
import { createGroq } from "@ai-sdk/groq";

export async function POST(req) {
    try {
        const apiKey = req.headers.get("x-groq-api-key");

        const groq = createGroq({
            apiKey: apiKey,
        });

        const { messages } = await req.json();

        const result = streamText({
            model: groq("llama-3.1-8b-instant"),
            messages: convertToModelMessages(messages),
        });

        return result.toUIMessageStreamResponse();
    } catch (error) {
        return new Response("Failed", { status: 500 });
    }
}
