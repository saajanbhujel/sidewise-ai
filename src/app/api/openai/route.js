import { convertToModelMessages, streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";

export async function POST(req) {
    try {
        const apiKey = req.headers.get("x-openai-api-key");

        if (!apiKey) {
            return new Response(JSON.stringify({ error: "Missing API key" }), {
                status: 401,
            });
        }

        const openai = createOpenAI({
            // custom settings, e.g.
            apiKey: apiKey,
        });

        const { messages } = await req.json();

        const result = streamText({
            model: openai("gpt-5-nano"),
            messages: convertToModelMessages(messages),
        });

        return result.toUIMessageStreamResponse();
    } catch (error) {
        return new Response("Failed", { status: 500 });
    }
}
