import { NavLink } from "react-router-dom";

const tabs = [
  { label: "Chat", path: "chat", disabled: false },
  { label: "Transcript", path: "transcript", disabled: false },
  { label: "Video", path: "video", disabled: true },
  { label: "Audio", path: "audio", disabled: true },
];

export default function FeatureTabs() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {tabs.map((tab) => {
        if (tab.disabled) {
          return (
            <div
              key={tab.path}
              title={`${tab.label} feature is coming soon`}
              aria-disabled="true"
              className="relative cursor-not-allowed rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-center text-sm font-semibold text-slate-400"
            >
              {tab.label}

              <span className="absolute right-2 top-1 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-medium text-amber-700">
                Coming soon
              </span>
            </div>
          );
        }

        return (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={({ isActive }) =>
              `rounded-xl border px-4 py-3 text-center text-sm font-semibold transition ${
                isActive
                  ? "border-indigo-600 bg-indigo-600 text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:bg-indigo-50"
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