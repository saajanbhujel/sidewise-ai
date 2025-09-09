"use client";

import ResponsePanel from "@/components/ResponsePanel";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { act, useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

export default function Home() {
    useEffect(() => {
        console.log("This runs on every render child1!");
        // Your code here
    });

    const [prompt, setPrompt] = useState("");
    const [activeModels, setActiveModels] = useState({
        openai: true,
        llama: true,
    });

    /*const { messages, sendMessage } = useChat({
        transport: new DefaultChatTransport({
            api: "/api/openai",
        }),
    });*/

    const openaiChat = useChat({
        transport: new DefaultChatTransport({
            api: "/api/openai",
        }),
    });

    const llamaChat = useChat({
        transport: new DefaultChatTransport({
            api: "/api/llama",
        }),
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        //sendMessage({ text: prompt });

        if (!prompt.trim()) return;

        if (activeModels.openai) openaiChat.sendMessage({ text: prompt });
        if (activeModels.llama) llamaChat.sendMessage({ text: prompt });

        //openaiChat.sendMessage({ text: prompt });
        //llamaChat.sendMessage({ text: prompt });
        console.log(openaiChat.status);

        setPrompt("");
    };

    const isDisabled =
        openaiChat.status !== "ready" || llamaChat.status !== "ready";

    return (
        <div className="relative w-full min-h-[calc(100vh-16px)] border rounded p-2 pt-10 flex flex-col gap-4 overflow-auto">
            <div className="flex gap-1 overflow-auto custom-scrollbar pb-1">
                <ResponsePanel
                    model="GPT OSS 120B (OpenAI)"
                    modelMessages={openaiChat.messages}
                    onToggle={() =>
                        setActiveModels((prev) => ({
                            ...prev,
                            openai: !prev.openai,
                        }))
                    }
                />
                <ResponsePanel
                    model="LLaMA (Meta)"
                    modelMessages={llamaChat.messages}
                    onToggle={() =>
                        setActiveModels((prev) => ({
                            ...prev,
                            llama: !prev.llama,
                        }))
                    }
                />
                <ResponsePanel model="Deepseek" />
                <ResponsePanel model="Grok" />
            </div>
            <form onSubmit={handleSubmit} className="flex justify-center">
                <div className="absolute bottom-3 shadow-lg w-[90%] bg-base-200 border rounded-xl flex flex-col items-end p-2 gap-2">
                    <TextareaAutosize
                        rows={1}
                        minRows={1}
                        maxRows={3}
                        className="w-full p-2 focus:outline-none resize-none text-lg"
                        placeholder="Ask me anything..."
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        disabled={isDisabled}
                    />

                    <button
                        type="submit"
                        className="btn btn-primary w-20 rounded-lg"
                        disabled={isDisabled}
                    >
                        {isDisabled ? "..." : "Enter"}
                    </button>
                </div>
            </form>
        </div>
    );
}
