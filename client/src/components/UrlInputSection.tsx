import { Link } from 'react-router-dom';
import { Icons } from './Icons';

export default function UrlInputSection() {
  return (
    <div className="mb-16 flex w-xl max-w-2xl flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-100/80 sm:flex-row">
      <div className="flex w-full flex-1 items-center space-x-3 pl-3">
        <Icons.Link />

        <input
          type="text"
          placeholder="https://www.youtube.com/watch?v=..."
          className="w-full flex-1 border-none bg-transparent py-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
        />
      </div>

      <div className="flex w-full items-center justify-end space-x-2 sm:w-auto">
        <Link
        to="/dashboard"
        className="w-full rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-100 transition-all hover:bg-indigo-700 active:scale-[0.98] sm:w-auto">
          Start Asking
        </Link>


      </div>
    </div>
  );
}

