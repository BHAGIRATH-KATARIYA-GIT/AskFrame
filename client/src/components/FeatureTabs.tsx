import { NavLink } from "react-router-dom";

const tabs = [
  { label: "Chat", path: "chat", disabled: false },
  { label: "Transcript", path: "transcript", disabled: false },
  { label: "Video", path: "video", disabled: true },
  { label: "Audio", path: "audio", disabled: true },
];

export default function FeatureTabs() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {tabs.map((tab) => {
        if (tab.disabled) {
          return (
            <div
              key={crypto.randomUUID()}
              title={`${tab.label} feature is coming soon`}
              aria-disabled="true"
              className="relative flex min-h-12 cursor-not-allowed items-center justify-center rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-center text-sm font-semibold text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-500"
            >
              <span className="pr-16">{tab.label}</span>

              <span className="absolute right-2 top-2 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-medium text-amber-700 dark:bg-amber-500/15 dark:text-amber-400">
                Coming soon
              </span>
            </div>
          );
        }

        return (
          <NavLink
            key={crypto.randomUUID()}
            to={tab.path}
            className={({ isActive }) =>
              `flex min-h-12 items-center justify-center rounded-xl border px-4 py-3 text-center text-sm font-semibold transition-colors ${
                isActive
                  ? "border-indigo-600 bg-indigo-600 text-white shadow-sm dark:border-indigo-500 dark:bg-indigo-500"
                  : "border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-indigo-500 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-400"
              }`
            }
          >
            {tab.label}
          </NavLink>
        );
      })}
    </div>
  );
}
