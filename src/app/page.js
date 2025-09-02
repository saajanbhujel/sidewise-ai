import ResponsePanel from "@/components/ResponsePanel";

export default function Home() {
    return (
        <div className="w-full border rounded p-2 pt-10 flex flex-col gap-4 overflow-auto">
            <div className="flex gap-1 overflow-auto custom-scrollbar scrollbar-hide-buttons pb-1">
                <ResponsePanel model="Chatgpt" />
                <ResponsePanel model="Claude" />
                <ResponsePanel model="Grok" />
                <ResponsePanel model="Deepseek" />
                
            </div>
        </div>
    );
}
