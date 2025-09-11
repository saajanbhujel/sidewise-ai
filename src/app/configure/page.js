"use client";

import React, { useEffect, useState } from "react";

const page = () => {
    const [apiKeys, setApiKeys] = useState({
        groq: "",
        openai: "",
        claude: "",
        gemini: "",
    });

    useEffect(() => {
        const savedApiKeys = {
            groq: localStorage.getItem("groq_api_key") || "",
            openai: localStorage.getItem("openai_api_key") || "",
            claude: localStorage.getItem("claude_api_key") || "",
            gemini: localStorage.getItem("gemini_api_key") || "",
        };
        setApiKeys(savedApiKeys);
    }, []);

    function handleChange(model, e) {
        setApiKeys((prev) => ({ ...prev, [model]: e.target.value }));
        localStorage.setItem(model + "_api_key", e.target.value);
    }

    return (
        <div className="w-full border rounded p-2 pt-10 flex flex-col gap-4 overflow-auto">
            <div className="flex flex-col gap-2 p-2 w-full text-center">
                <h1 className="text-5xl font-bold">Configure</h1>
                <p className="text-lg">
                    Your API keys will be stored in your browser so you don't
                    have to re-enter it every time — it never leaves your
                    device.
                </p>
            </div>
            <div className="flex ">
                <div className="p-4 flex flex-col gap-2 border rounded-lg shadow-lg w-[90%] sm:w-[80%] m-auto">
                    <input
                        className="input w-full"
                        type="password"
                        placeholder="Enter your Groq API key"
                        value={apiKeys.groq}
                        onChange={function (e) {
                            handleChange("groq", e);
                        }}
                    />
                    <input
                        className="input w-full"
                        type="password"
                        placeholder="Enter your OpenAI API key"
                        value={apiKeys.openai}
                        onChange={function (e) {
                            handleChange("openai", e);
                        }}
                    />
                    <input
                        className="input w-full"
                        type="password"
                        placeholder="Enter your Claude API key"
                        value={apiKeys.claude}
                        onChange={function (e) {
                            handleChange("claude", e);
                        }}
                    />
                    <input
                        className="input w-full"
                        type="password"
                        placeholder="Enter your Gemini API key"
                        value={apiKeys.gemini}
                        onChange={function (e) {
                            handleChange("gemini", e);
                        }}
                    />
                    <button className="btn btn-primary w-[90%] rounded-lg m-auto">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default page;
