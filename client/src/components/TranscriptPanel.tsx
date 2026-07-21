import { useState } from "react";
import type { TranscriptEntry } from "../types/types";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { clearTranscript } from "../features/AppSlice";

export default function TranscriptPanel() {
  function removeTranscript() {
    dispatch(clearTranscript());
  }

  const dispatch = useDispatch();
  // const transcriptEntries: TranscriptEntry[] = getTranscriptFromLocalStorage();

  // const [transcriptEntries, setTranscriptEntries] = useState()
  const transcriptEntries = useSelector(
    (state: RootState) => state.app.transcript,
  );
  console.log("Transcript: ", transcriptEntries);

  return (
    <div className="flex h-full min-h-0 flex-col p-3 sm:p-4">
      <div className="flex shrink-0 items-center gap-2">
        <div className="flex min-w-0 flex-1 items-center rounded-xl border border-slate-200/70 bg-slate-50 px-3 py-2.5 shadow-inner transition-colors dark:border-slate-700 dark:bg-slate-800 sm:px-4">
          <input
            type="text"
            placeholder="Search transcript..."
            className="w-full min-w-0 border-none bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 dark:text-slate-200 dark:placeholder:text-slate-500"
          />
        </div>

        <button
          type="button"
          onClick={() => removeTranscript()}
          disabled={transcriptEntries.length === 0}
          className="shrink-0 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2.5 text-xs font-semibold text-rose-600 transition-colors hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-rose-500/20 dark:bg-rose-500/10 dark:text-rose-400 dark:hover:bg-rose-500/20 sm:px-4 sm:text-sm"
        >
          Clear
        </button>
      </div>

      <div className="mt-4 min-h-0 flex-1 space-y-4 overflow-y-auto pr-1">
        {transcriptEntries.length > 0 ? (
          transcriptEntries.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-start gap-2 sm:flex-row sm:gap-3.5"
            >
              <button
                type="button"
                className="shrink-0 rounded-lg border border-indigo-100 bg-indigo-50 px-2 py-1 font-mono text-xs font-bold tracking-tight text-indigo-600 transition-all group-hover:border-indigo-200 group-hover:bg-indigo-100 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-400 dark:group-hover:border-indigo-500/40 dark:group-hover:bg-indigo-500/20"
              >
                [{item.time}]
              </button>

              <p className="min-w-0 wrap-break-word text-sm leading-relaxed text-slate-600 transition-colors group-hover:text-slate-800 dark:text-slate-300 dark:group-hover:text-slate-100 sm:pt-0.5">
                {item.text}
              </p>
            </div>
          ))
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-slate-400 dark:text-slate-500">
            No transcript available
          </div>
        )}
      </div>
    </div>
  );
}
