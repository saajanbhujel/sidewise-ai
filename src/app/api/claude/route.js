import { convertToModelMessages, streamText } from "ai";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { createGroq } from "@ai-sdk/groq";

export async function POST(req) {
    try {
        const apiKey = req.headers.get("x-openrouter-api-key");

        const groq = createGroq({
            apiKey: apiKey,
        });

        const openrouter = createOpenRouter({
            apiKey: apiKey,
        });

        const { messages } = await req.json();

        const result = streamText({
            model: openrouter.chat("anthropic/claude-3.7-sonnet"),
            messages: convertToModelMessages(messages),
        });

        return result.toUIMessageStreamResponse();
    } catch (error) {
        return new Response("Failed", { status: 500 });
    }
}
