import { convertToModelMessages, streamText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

export async function POST(req) {
    try {
        const apiKey = req.headers.get("x-gemini-api-key");

        const google = createGoogleGenerativeAI({
            apiKey: apiKey,
        });

        const { messages } = await req.json();

        const result = streamText({
            model: google("gemini-2.0-flash"),
            messages: convertToModelMessages(messages),
        });

        return result.toUIMessageStreamResponse();
    } catch (error) {
        return new Response("Failed", { status: 500 });
    }
}
