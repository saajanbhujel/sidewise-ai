import React from "react";

const Conversation = ({ model, modelMessages, modelError }) => {
    return (
        <div className="p-2 2xl:h-120 h-100 text-base-content overflow-auto custom-scrollbar flex flex-col-reverse no-arrows">
            <div className="flex flex-col space-y-2">
                {modelMessages?.map((message) => (
                    <div
                        className={`flex ${
                            message.role == "user"
                                ? "justify-end"
                                : "justify-start"
                        } `}
                        key={message.id}
                    >
                        {message.parts.map((part, index) => {
                            switch (part.type) {
                                case "text":
                                    return (
                                        <div
                                            className={`bg-base-100 rounded-2xl p-2 max-w-[90%] border-2 shadow-sm ${
                                                message.role == "user"
                                                    ? "rounded-tr-sm border-blue-600"
                                                    : "rounded-tl-sm border-base-content/30"
                                            } `}
                                            key={`${message.id}-${index}`}
                                        >
                                            <p>{part.text}</p>
                                        </div>
                                    );
                                default:
                                    return null;
                            }
                        })}
                    </div>
                ))}

                {/*<div className="flex justify-end">
                    <div className="bg-base-100 rounded-2xl rounded-tr-sm p-2 max-w-[90%] border-2 border-blue-600 shadow-sm">
                        <p>first Message</p>
                    </div>
                </div>

                <div className="flex justify-start">
                    <div className="bg-base-100 border-2 border-base-content/30 rounded-2xl rounded-tl-sm p-2 max-w-[90%] shadow-sm">
                        <p>
                            Hi i love to help you. Hi i love to help you. Hi i
                            love to help you.
                        </p>
                    </div>
                </div>

                <div className="flex justify-end">
                    <div className="bg-base-100 rounded-2xl rounded-tr-sm p-2 max-w-[90%] border-2 border-blue-600 shadow-sm">
                        <p>second Message</p>
                    </div>
                </div>

                <div className="flex justify-start">
                    <div className="bg-base-100 border-2 border-base-content/30 rounded-2xl rounded-tl-sm p-2 max-w-[90%] shadow-sm">
                        <p>
                            Hi i love to help you. Hi i love to help you. Hi i
                            love to help you.
                        </p>
                    </div>
                </div>

                <div className="flex justify-end">
                    <div className="bg-base-100 rounded-2xl rounded-tr-sm p-2 max-w-[90%] border-2 border-blue-600 shadow-sm">
                        <p>3rd Message</p>
                    </div>
                </div>

                <div className="flex justify-start">
                    <div className="bg-base-100 border-2 border-base-content/30 rounded-2xl rounded-tl-sm p-2 max-w-[90%] shadow-sm">
                        <p>
                            Hi i love to help you. Hi i love to help you. Hi i
                            love to help you.
                        </p>
                    </div>
                </div>

                <div className="flex justify-end">
                    <div className="bg-base-100 rounded-2xl rounded-tr-sm p-2 max-w-[90%] border-2 border-blue-600 shadow-sm">
                        <p>4th Message</p>
                    </div>
                </div>

                <div className="flex justify-start">
                    <div className="bg-base-100 border-2 border-base-content/30 rounded-2xl rounded-tl-sm p-2 max-w-[90%] shadow-sm">
                        <p>
                            Hi i love to help you. Hi i love to help you. Hi i
                            love to help you.
                        </p>
                    </div>
                </div>

                <div className="flex justify-end">
                    <div className="bg-base-100 rounded-2xl rounded-tr-sm p-2 max-w-[90%] border-2 border-blue-600 shadow-sm">
                        <p>latest Message</p>
                    </div>
                </div>

                <div className="flex justify-start">
                    <div className="bg-base-100 border-2 border-base-content/30 rounded-2xl rounded-tl-sm p-2 max-w-[90%] shadow-sm">
                        <p>
                            Hi i love to help you. Hi i love to help you. Hi i
                            love to help you.
                        </p>
                    </div>
                </div>*/}
            </div>
        </div>
    );
};

export default Conversation;
