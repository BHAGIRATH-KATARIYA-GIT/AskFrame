export default function ProductMockup() {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/30 sm:rounded-2xl">
      <div className="flex items-center justify-between gap-2 border-b border-slate-200 bg-slate-50 px-3 py-3 dark:border-slate-800 dark:bg-slate-950/70 sm:px-4 sm:py-3.5">
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-rose-400 sm:h-3.5 sm:w-3.5" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-400 sm:h-3.5 sm:w-3.5" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 sm:h-3.5 sm:w-3.5" />
        </div>

        <div className="mx-2 min-w-0 flex-1 truncate rounded-md border border-slate-200 bg-white px-2 py-1.5 text-center text-[10px] font-medium text-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-500 sm:max-w-72 sm:rounded-lg sm:px-4 sm:text-xs md:px-8">
          askframe.ai/analysis/future-of-ai
        </div>

        <div className="hidden w-12 sm:block" />
      </div>

      <div className="grid min-h-0 grid-cols-1 md:min-h-115 md:grid-cols-12">
        <div className="flex min-w-0 flex-col border-b border-slate-200 dark:border-slate-800 md:col-span-7 md:border-b-0 md:border-r">
          <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-slate-900 dark:bg-black">
            <div className="absolute inset-0 flex cursor-pointer items-center justify-center bg-slate-950/20 transition-all duration-300 hover:bg-slate-950/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-indigo-600 shadow-xl backdrop-blur transition-transform duration-300 hover:scale-110 dark:bg-slate-100 sm:h-16 sm:w-16">
                <div className="ml-1 h-0 w-0 border-y-[7px] border-l-11 border-y-transparent border-l-indigo-600 sm:border-y-[9px] sm:border-l-14" />
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-between bg-slate-50 p-4 dark:bg-slate-950/60 sm:p-5">
            <div>
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="text-xs font-bold uppercase tracking-wide text-indigo-600 dark:text-indigo-400 sm:text-sm">
                  Transcript
                </span>
                <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 sm:text-xs">
                  0:00 - 12:45
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-2.5 text-xs leading-relaxed sm:gap-3">
                  <button className="shrink-0 rounded-md bg-indigo-100 px-2 py-1 text-[10px] font-bold text-indigo-700 transition-colors hover:bg-indigo-200 dark:bg-indigo-500/15 dark:text-indigo-300 dark:hover:bg-indigo-500/25">
                    0:45
                  </button>

                  <p className="min-w-0 flex-1 text-slate-500 dark:text-slate-400">
                    Today we&apos;re going to dive deep into the architecture of
                    neural networks and how they&apos;ve evolved over the last
                    decade...
                  </p>
                </div>

                <div className="flex items-start gap-2.5 text-xs leading-relaxed sm:gap-3">
                  <button className="shrink-0 rounded-md bg-indigo-100 px-2 py-1 text-[10px] font-bold text-indigo-700 transition-colors hover:bg-indigo-200 dark:bg-indigo-500/15 dark:text-indigo-300 dark:hover:bg-indigo-500/25">
                    1:12
                  </button>

                  <p className="min-w-0 flex-1 text-slate-500 dark:text-slate-400">
                    Understanding the gradient descent process is crucial for
                    anyone looking to build production-grade models.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex min-h-105 min-w-0 flex-col justify-between bg-white dark:bg-slate-900 md:col-span-5 md:min-h-0">
          <div className="flex items-center justify-between border-b border-slate-100 px-4 py-4 dark:border-slate-800 sm:px-5">
            <div className="flex min-w-0 items-center gap-2">
              <div className="h-2.5 w-2.5 shrink-0 animate-pulse rounded-full bg-emerald-500" />
              <span className="truncate text-xs font-bold text-slate-700 dark:text-slate-200">
                AskFrame Assistant
              </span>
            </div>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto p-4 text-xs sm:p-5">
            <div className="flex justify-end">
              <div className="max-w-[88%] rounded-2xl rounded-tr-sm bg-slate-100 px-3.5 py-2.5 font-medium leading-relaxed text-slate-700 dark:bg-slate-800 dark:text-slate-200 sm:max-w-[85%] sm:px-4">
                Summarize the main technical points discussed in the first 5
                minutes.
              </div>
            </div>

            <div className="flex items-start">
              <div className="max-w-[94%] rounded-2xl rounded-tl-sm border border-indigo-100 bg-indigo-50/70 px-3.5 py-3 leading-relaxed text-slate-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-slate-200 sm:max-w-[90%] sm:px-4">
                <div className="mb-1.5 font-semibold text-indigo-700 dark:text-indigo-300">
                  In the first 5 minutes, the video covers:
                </div>

                <ul className="list-disc space-y-1.5 pl-4 text-slate-600 dark:text-slate-400">
                  <li>Historical context of ANN (Neural Nets)</li>
                  <li>Evolution of activation functions</li>
                  <li>Backpropagation fundamentals</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950/60 sm:p-4">
            <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2.5 shadow-sm transition-colors focus-within:border-indigo-400 dark:border-slate-700 dark:bg-slate-900 dark:focus-within:border-indigo-500 sm:px-4">
              <input
                type="text"
                placeholder="Ask anything about the video..."
                disabled
                className="min-w-0 flex-1 border-none bg-transparent pr-2 text-xs text-slate-500 outline-none placeholder:text-slate-400 disabled:cursor-not-allowed dark:text-slate-300 dark:placeholder:text-slate-500"
              />

              <button
                disabled
                className="flex h-7 w-7 shrink-0 cursor-not-allowed items-center justify-center rounded-lg bg-indigo-600/50 text-white dark:bg-indigo-500/40"
              >
                <div className="h-0 w-0 border-y-4 border-l-[7px] border-y-transparent border-l-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
