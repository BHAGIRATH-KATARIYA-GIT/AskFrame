import { NavLink } from 'react-router-dom';

const tabs = [
  { label: 'Chat', path: 'chat' },
  { label: 'Transcript', path: 'transcript' },
  { label: 'Video', path: 'video' },
  { label: 'Audio', path: 'audio' },
];

export default function FeatureTabs() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {tabs.map((tab) => (
        <NavLink
          key={tab.path}
          to={tab.path}
          className={({ isActive }) =>
            `rounded-xl border px-4 py-3 text-center text-sm font-semibold transition ${
              isActive
                ? 'border-indigo-600 bg-indigo-600 text-white'
                : 'border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:bg-indigo-50'
            }`
          }
        >
          {tab.label}
        </NavLink>
      ))}
    </div>
  );
}