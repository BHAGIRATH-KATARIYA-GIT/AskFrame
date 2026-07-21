import { useState } from "react";
import type { TranscriptEntry } from "../types/types";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export default function TranscriptPanel() {
  // const transcriptEntries: TranscriptEntry[] = getTranscriptFromLocalStorage();

  // const [transcriptEntries, setTranscriptEntries] = useState()
  const transcriptEntries = useSelector(
    (state: RootState) => state.app.transcript,
  );
  console.log("Transcript: ", transcriptEntries);

  return (
    <div className="space-y-4 rounded-2xl border border-slate-200/80 bg-white p-3 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900 sm:p-4">
      <div className="flex items-center rounded-xl border border-slate-200/70 bg-slate-50 px-3 py-2.5 shadow-inner transition-colors dark:border-slate-700 dark:bg-slate-800 sm:px-4">
        <input
          type="text"
          placeholder="Search transcript..."
          className="w-full min-w-0 border-none bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 dark:text-slate-200 dark:placeholder:text-slate-500"
        />
      </div>

      <div className="max-h-[60vh] space-y-4 overflow-y-auto pr-1 sm:max-h-[65vh]">
        {transcriptEntries.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col items-start gap-2 text-slate-600 sm:flex-row sm:gap-3.5 dark:text-slate-300"
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
        ))}
      </div>
    </div>
  );
}
