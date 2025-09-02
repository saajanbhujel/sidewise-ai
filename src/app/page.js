"use client";

import ResponsePanel from "@/components/ResponsePanel";
import TextareaAutosize from "react-textarea-autosize";

export default function Home() {
    return (
        <div className="relative w-full min-h-[calc(100vh-16px)] border rounded p-2 pt-10 flex flex-col gap-4 overflow-auto">
            <div className="flex gap-1 overflow-auto custom-scrollbar scrollbar-hide-buttons pb-1">
                <ResponsePanel model="Chatgpt" />
                <ResponsePanel model="Claude" />
                <ResponsePanel model="Grok" />
                <ResponsePanel model="Deepseek" />
            </div>
            <form className="flex justify-center">
                <div className="absolute bottom-3 shadow-lg w-[90%] bg-base-200 border rounded-xl flex flex-col items-end p-2 gap-2">
                    <TextareaAutosize
                        rows={1}
                        minRows={1}
                        maxRows={3}
                        className="w-full p-2 focus:outline-none resize-none text-lg"
                        placeholder="Type your question?..."
                    />
                    <button
                        type="submit"
                        className="btn w-20 rounded-lg"
                    >
                        Enter
                    </button>
                </div>
            </form>
        </div>
    );
}
