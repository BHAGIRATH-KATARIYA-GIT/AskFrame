import { Icons } from './Icons';

const suggestions = [
  'Summarize this video',
  'Explain the key concepts',
  'List important points',
];

export default function ChatPanel() {
  return (
    <div className="flex h-full min-h-[600px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <header className="flex shrink-0 items-center justify-between border-b border-slate-200 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            <Icons.Sparkles />
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
          className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
        >
          <Icons.Trash />
        </button>
      </header>

      {/* Messages area */}
      <div className="flex min-h-0 flex-1 items-center justify-center overflow-y-auto bg-slate-50/40 p-6">
        <div className="max-w-sm text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
            <Icons.Sparkles />
          </div>

          <h3 className="mt-4 text-base font-bold text-slate-800">
            Start a conversation
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Paste a YouTube URL, process the video, and ask questions about its
            content.
          </p>
        </div>
      </div>

      {/* Suggestions */}
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

      {/* Input */}
      <div className="shrink-0 border-t border-slate-200 bg-white p-4">
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 transition focus-within:border-indigo-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-indigo-100">
          <input
            type="text"
            placeholder="Ask anything about the video..."
            className="min-w-0 flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />

          <button
            type="button"
            aria-label="Send message"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white transition hover:bg-indigo-700 active:scale-95"
          >
            <Icons.Send />
          </button>
        </div>
      </div>
    </div>
  );
}

