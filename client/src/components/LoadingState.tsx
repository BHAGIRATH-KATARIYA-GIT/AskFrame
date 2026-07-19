
export default function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-100 border-t-indigo-600" />

      <div className="text-center">
        <h4 className="text-sm font-semibold text-slate-800">
          Processing YouTube URL
        </h4>

        <p className="mx-auto mt-1 max-w-xs text-xs text-slate-400">
          Extracting transcript and preparing the video analysis...
        </p>
      </div>

      <div className="h-1.5 w-64 max-w-full overflow-hidden rounded-full bg-slate-100">
        <div className="h-full w-3/5 rounded-full bg-indigo-600" />
      </div>
    </div>
  );
}

