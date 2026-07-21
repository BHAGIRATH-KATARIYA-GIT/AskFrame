import { useState } from "react";
import { BASE_URL } from "../App";
import type { TranscriptEntry } from "../types/types";
import { useDispatch } from "react-redux";
import { addMessage, clearVideoURL, setTranscript } from "../features/AppSlice";
import {
  getVideoURLFromLocalStorage,
  storeVideoURLToLocalStorage,
} from "../services/localstorage";

export default function UrlInputSection() {
  const dispatch = useDispatch();
  const [youtubeUrl, setYoutubeUrl] = useState(() =>
    getVideoURLFromLocalStorage(),
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!youtubeUrl.trim()) {
      setError("Please enter a YouTube URL");
      return;
    }

    try {
      setIsLoading(true);
      setError("");
      const response = await fetch(`${BASE_URL}/get-transcript`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          video_url: youtubeUrl.trim(),
        }),
      });

      console.log("Response: ", response);

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || "Failed to process URL");
      }

      const data = await response.json();

      dispatch(setTranscript(data?.response));
      storeVideoURLToLocalStorage(youtubeUrl.trim());
      console.log("Data", data);
    } catch (error) {
      console.log("Error: ", error);
      setError(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mb-16 flex w-full max-w-2xl flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-100/80 transition-colors dark:border-slate-700 dark:bg-slate-900 dark:shadow-none sm:flex-row sm:items-center">
      <div className="w-full min-w-0 flex-1">
        <div className="flex items-center gap-2 px-3">
          <input
            type="url"
            value={youtubeUrl}
            onChange={(event) => {
              setYoutubeUrl(event.target.value);

              if (error) {
                setError("");
              }
            }}
            placeholder="https://www.youtube.com/watch?v=..."
            className="min-w-0 flex-1 border-none bg-transparent py-2 text-sm text-slate-700 outline-none placeholder:text-slate-400 dark:text-slate-200 dark:placeholder:text-slate-500"
          />

          {youtubeUrl && (
            <button
              type="button"
              onClick={() => {
                setYoutubeUrl("");
                setError("");
                dispatch(clearVideoURL());
              }}
              aria-label="Clear YouTube URL"
              title="Clear URL"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:hover:bg-slate-800 dark:hover:text-slate-200"
            >
              &times;
            </button>
          )}
        </div>

        {error && (
          <p className="px-3 pb-1 text-xs text-red-500 dark:text-red-400">
            {error}
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        disabled={isLoading || !youtubeUrl.trim()}
        className="w-full shrink-0 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-100 transition-all hover:bg-indigo-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-indigo-400 disabled:active:scale-100 dark:shadow-none dark:hover:bg-indigo-500 sm:w-auto"
      >
        {isLoading ? "Processing..." : "Start Asking"}
      </button>
    </div>
  );
}
