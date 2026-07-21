import { useState } from "react";
import { BASE_URL } from "../App";
import { IoIosSend } from "react-icons/io";
import { HiOutlineSparkles } from "react-icons/hi";
import { FaTrash } from "react-icons/fa";
import "../style/ChatLoader.css";
import { getVideoURLFromLocalStorage } from "./UrlInputSection";
import type { ChatMessage } from "../types/types";

const suggestions = [
  "Summarize this video",
  "Explain the key concepts",
  "List important points",
];

export default function ChatPanel() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const youtubeUrl = getVideoURLFromLocalStorage();

  const handleQuery = async () => {
    if (isLoading) return;

    const trimmedUrl = youtubeUrl?.trim();
    const trimmedQuery = query.trim();

    if (!trimmedUrl) {
      setError("Please enter a YouTube URL");
      return;
    }

    if (!trimmedQuery) {
      setError("Please enter a question");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const Usermessage: ChatMessage = {
        role: "user",
        content: query,
      };

      const response = await fetch(`${BASE_URL}/ask-question`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_query: trimmedQuery,
          video_url: trimmedUrl,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.message || "Failed to process question");
      }

      console.log("Chat Data:", data);

      // Add the response to Redux or local messages state here.
      const AImessage: ChatMessage = {
        role: "AI",
        content: data?.response,
      };

      setQuery("");
    } catch (error) {
      setError(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-full min-h-150 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <header className="flex shrink-0 items-center justify-between border-b border-slate-200 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            <HiOutlineSparkles size={25} />
          </div>

          <div>
            <h2 className="text-sm font-bold text-slate-800">
              AskFrame Assistant
            </h2>

            <div className="mt-0.5 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />

              <span className="text-xs font-medium text-slate-500">
                Ready to help
              </span>
            </div>
          </div>
        </div>

        <button
          type="button"
          aria-label="Clear chat"
          className="flex h-9 w-9 items-center justify-center rounded-lg  transition hover:bg-slate-100 hover:text-slate-700"
        >
          <FaTrash size={25} />
        </button>
      </header>

      <div className="flex min-h-0 flex-1 overflow-y-auto bg-slate-50/40 p-6">
        {messages.length === 0 ? (
          <div className="flex w-full items-center justify-center">
            <div className="max-w-sm text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
                <HiOutlineSparkles size={30} />
              </div>

              <h3 className="mt-4 text-base font-bold text-slate-800">
                Start a conversation
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Paste a YouTube URL, process the video, and ask questions about
                its content.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex w-full flex-col gap-4">
            {messages.map((message) => (
              <div
                key={Date.now()}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.role === "user"
                      ? "rounded-br-md bg-indigo-600 text-white"
                      : "rounded-bl-md border border-slate-200 bg-white text-slate-700"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex shrink-0 flex-wrap gap-2 border-t border-slate-200 px-4 py-3">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            type="button"
            className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600"
          >
            {suggestion}
          </button>
        ))}
      </div>

      <div className="shrink-0 border-t border-slate-200 bg-white p-4">
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 transition focus-within:border-indigo-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-indigo-100">
          <input
            type="text"
            value={query}
            placeholder="Ask anything about the video..."
            onChange={(e) => setQuery(e.target.value)}
            disabled={isLoading}
            className="min-w-0 flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-60"
          />

          <button
            type="button"
            aria-label={isLoading ? "Sending message" : "Send message"}
            onClick={handleQuery}
            disabled={isLoading || !query.trim()}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white transition hover:bg-indigo-700 active:scale-95 disabled:cursor-not-allowed disabled:bg-indigo-300 disabled:active:scale-100"
          >
            <IoIosSend size={25} />
          </button>
        </div>
      </div>

      <div>{error}</div>
    </div>
  );
}
