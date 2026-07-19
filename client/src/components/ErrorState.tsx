
import { Icons } from './Icons';

export default function ErrorState() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 rounded-2xl border border-red-100 bg-white p-8 text-center shadow-sm">
      <Icons.AlertCircle />

      <div>
        <h4 className="text-sm font-semibold text-slate-800">
          Something went wrong
        </h4>

        <p className="mx-auto mt-1 max-w-sm text-xs text-slate-400">
          We could not process this video. Please check the URL and try again.
        </p>
      </div>

      <button className="rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-indigo-700 active:scale-[0.98]">
        Try Again
      </button>
    </div>
  );
}

