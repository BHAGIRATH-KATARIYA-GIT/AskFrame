import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

interface TranscriptEntry {
  time: string;
  text: string;
}

export default function TranscriptPanel() {
  const transcriptEntries: TranscriptEntry[] = useSelector(
    (state: RootState) => state.app.transcript,
  ) as TranscriptEntry[];
  console.log("Transcript: ", transcriptEntries);

  return (
    <div className="space-y-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between rounded-xl border border-slate-200/70 bg-slate-50 px-4 py-2.5 shadow-inner">
        <div className="flex flex-1 items-center space-x-2.5">
          <input
            type="text"
            placeholder="Search transcript..."
            className="flex-1 border-none bg-transparent text-sm text-slate-700 outline-none"
          />
        </div>
      </div>

      <div className="max-h-[65vh] space-y-4 pr-1 overflow-y-auto">
        {transcriptEntries.map((item, index) => (
          <div
            key={`${index}`}
            className="group flex items-start space-x-3.5 text-slate-600"
          >
            <button className="shrink-0 rounded-lg border border-indigo-100 bg-indigo-50 px-2 py-1 font-mono text-xs font-bold tracking-tight text-indigo-600 transition-all group-hover:border-indigo-200 group-hover:bg-indigo-100">
              [{item.time}]
            </button>

            <p className="pt-0.5 text-sm leading-relaxed text-slate-600 transition-colors group-hover:text-slate-800">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
