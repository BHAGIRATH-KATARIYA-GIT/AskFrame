import { useState } from "react";
import { BASE_URL } from "../App";
import { IoIosSend } from "react-icons/io";
import { HiOutlineSparkles } from "react-icons/hi";
import { FaTrash } from "react-icons/fa";
import "../style/ChatLoader.css";
import type { ChatMessage } from "../types/types";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { addMessage, clearMessages } from "../features/AppSlice";
import { getVideoURLFromLocalStorage } from "../services/localstorage";

const suggestions = [
  "Summarize this video",
  "Explain the key concepts",
  "List important points",
];

export default function ChatPanel() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const youtubeUrl = getVideoURLFromLocalStorage();
  const transcript = useSelector((state: RootState) => state.app.transcript);
  const messages = useSelector((state: RootState) => state.app.messages);

  function clearChat(messages: ChatMessage[]) {
    dispatch(clearMessages());
  }

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

      dispatch(addMessage(Usermessage));

      const response = await fetch(`${BASE_URL}/ask-question`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_query: trimmedQuery,
          video_url: trimmedUrl,
          transcript: transcript,
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

      dispatch(addMessage(AImessage));

      setQuery("");
    } catch (error) {
      setError(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-full min-h-130 w-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900 sm:min-h-150">
      <header className="flex shrink-0 items-center justify-between gap-3 border-b border-slate-200 px-4 py-3 dark:border-slate-800 sm:px-5 sm:py-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400 sm:h-10 sm:w-10">
            <HiOutlineSparkles size={24} />
          </div>

          <div className="min-w-0">
            <h2 className="truncate text-sm font-bold text-slate-800 dark:text-white">
              AskFrame Assistant
            </h2>

            <div className="mt-0.5 flex items-center gap-1.5">
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />

              <span className="truncate text-xs font-medium text-slate-500 dark:text-slate-400">
                Ready to help
              </span>
            </div>
          </div>
        </div>

        <button
          type="button"
          aria-label="Clear chat"
          onClick={() => clearChat(messages)}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-red-600 dark:text-slate-500 dark:hover:bg-slate-800 dark:hover:text-red-400"
        >
          <FaTrash size={18} />
        </button>
      </header>

      <div className="flex min-h-0 flex-1 overflow-y-auto bg-slate-50/40 p-3 dark:bg-slate-950/40 sm:p-5 lg:p-6">
        {messages.length === 0 ? (
          <div className="flex w-full items-center justify-center">
            <div className="max-w-sm px-4 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400 sm:h-14 sm:w-14">
                <HiOutlineSparkles size={28} />
              </div>

              <h3 className="mt-4 text-base font-bold text-slate-800 dark:text-white">
                Start a conversation
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                Paste a YouTube URL, process the video, and ask questions about
                its content.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex w-full flex-col gap-3 sm:gap-4">
            {messages.map((message: ChatMessage, index) => (
              <div
                key={crypto.randomUUID()}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[90%] wrap-break-word rounded-2xl px-3 py-2.5 text-sm leading-6 sm:max-w-[80%] sm:px-4 sm:py-3 ${
                    message.role === "user"
                      ? "rounded-br-md bg-indigo-600 text-white dark:bg-indigo-500"
                      : "rounded-bl-md border border-slate-200 bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex shrink-0 gap-2 overflow-x-auto border-t border-slate-200 px-3 py-3 dark:border-slate-800 sm:flex-wrap sm:overflow-visible sm:px-4">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            type="button"
            className="shrink-0 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-indigo-500 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-400"
          >
            {suggestion}
          </button>
        ))}
      </div>

      <div className="shrink-0 border-t border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900 sm:p-4">
        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 transition focus-within:border-indigo-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-indigo-100 dark:border-slate-700 dark:bg-slate-800 dark:focus-within:border-indigo-500 dark:focus-within:bg-slate-800 dark:focus-within:ring-indigo-500/10 sm:gap-3 sm:px-4">
          <input
            type="text"
            value={query}
            placeholder="Ask anything about the video..."
            onChange={(e) => setQuery(e.target.value)}
            disabled={isLoading}
            className="min-w-0 flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-60 dark:text-slate-200 dark:placeholder:text-slate-500"
          />

          <button
            type="button"
            aria-label={isLoading ? "Sending message" : "Send message"}
            onClick={handleQuery}
            disabled={isLoading || !query.trim()}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white transition hover:bg-indigo-700 active:scale-95 disabled:cursor-not-allowed disabled:bg-indigo-300 disabled:active:scale-100 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:disabled:bg-indigo-500/40"
          >
            <IoIosSend size={22} />
          </button>
        </div>

        {error && (
          <div
            role="alert"
            className="mt-3 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400"
          >
            <span className="mt-0.5 shrink-0">⚠</span>
            <p className="min-w-0 wrap-break-word leading-5">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}
