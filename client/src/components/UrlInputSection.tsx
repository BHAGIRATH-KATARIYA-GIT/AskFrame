import { useState } from "react";
import { BASE_URL } from "../App";
import type { TranscriptEntry } from "../types/types";
import { useDispatch } from "react-redux";
import { addMessage, setTranscript } from "../features/AppSlice";

function storeTranscriptToLocalStorage  (transcript: TranscriptEntry[]) {
  const storedTranscript = JSON.stringify(transcript);
  localStorage.setItem("transcript", storedTranscript);
};

function storeVideoURLToLocalStorage (video_url: string){
  localStorage.setItem("video_url", video_url);
};

function getTranscriptFromLocalStorage(){
  const storedData = localStorage.getItem("transcript");
  const parsedData = storedData ? JSON.parse(storedData) : [];

  return parsedData;
};

function getVideoURLFromLocalStorage  ()  {
  const storedData = localStorage.getItem("video_url");
  return storedData ? storedData : ""
};

function clearLocalStorage (){
  localStorage.clear()
}

export default function UrlInputSection() {
  const dispatch = useDispatch()
  const [youtubeUrl, setYoutubeUrl] = useState(() => getVideoURLFromLocalStorage());
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

      dispatch(setTranscript(data?.response))
      storeTranscriptToLocalStorage(data?.response);
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
    <div className="mb-16 flex w-xl max-w-2xl flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-100/80 sm:flex-row">
      <div className="w-full flex-1">
        <div className="flex items-center space-x-3 pl-3">
          <input
            type="url"
            value={youtubeUrl}
            onChange={(event) => setYoutubeUrl(event.target.value)}
            placeholder="https://www.youtube.com/watch?v=..."
            className="w-full flex-1 border-none bg-transparent py-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />
        </div>

        {error && <p className="px-3 pb-1 text-xs text-red-500">{error}</p>}
      </div>

      <div className="flex w-full items-center justify-end sm:w-auto">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-100 transition-all hover:bg-indigo-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-indigo-400 sm:w-auto"
        >
          {isLoading ? "Processing..." : "Start Asking"}
        </button>
      </div>
    </div>
  );
}



export {
  getTranscriptFromLocalStorage,
  getVideoURLFromLocalStorage,
  storeTranscriptToLocalStorage,
  storeVideoURLToLocalStorage,
  clearLocalStorage
};
