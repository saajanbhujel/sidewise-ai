import React from "react";
import Conversation from "./Conversation";

const ResponsePanel = ({ model, modelMessages, modelError, onToggle, modelIcon }) => {
    return (
        <div className="border rounded-xl sm:w-[max(32%,350px)] sm:min-w-[max(32%,350px)] w-[300px] min-w-[300px]">
            <div className="border rounded-xl shadow-md p-2 flex gap-2 justify-between items-center">
                <div className="flex items-center gap-2">
                    {modelIcon}
                    <h2 className="font-semibold">{model}</h2>
                </div>
                <div className="flex gap-2 items-center">
                    <button className="flex cursor-pointer">
                        <input
                            type="checkbox"
                            defaultChecked
                            className="toggle toggle-sm"
                            onClick={onToggle}
                        />
                    </button>
                    <button className="flex cursor-pointer">
                        <span className="material-symbols-outlined">hide</span>
                    </button>
                </div>
            </div>
            <Conversation model={model} modelMessages={modelMessages} modelError={modelError} />
        </div>
    );
};

export default ResponsePanel;
