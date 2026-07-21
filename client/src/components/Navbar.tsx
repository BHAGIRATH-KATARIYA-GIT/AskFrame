import { NavLink, type NavLinkRenderProps } from "react-router-dom";

export default function Navbar() {
  const linkClasses = ({ isActive }: NavLinkRenderProps) =>
    `border-b-2 pb-1 pt-0.5 text-sm font-semibold transition-colors ${
      isActive
        ? "border-indigo-600 text-indigo-600"
        : "border-transparent text-slate-500 hover:text-slate-800"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 px-4 py-3 backdrop-blur-md transition-colors dark:border-slate-800 dark:bg-slate-950/80 sm:px-6 md:px-12 md:py-4">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3">
        <NavLink
          to="/"
          className="flex shrink-0 items-center gap-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-base font-bold text-white shadow-md shadow-indigo-200 dark:shadow-none">
            AF
          </div>

          <span className="hidden text-lg font-bold tracking-tight text-slate-900 dark:text-white xs:block sm:text-xl">
            AskFrame
          </span>
        </NavLink>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-sm font-semibold transition-colors ${
                isActive
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `text-sm font-semibold transition-colors ${
                isActive
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
              }`
            }
          >
            Dashboard
          </NavLink>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Dark-mode toggle UI only */}
          <button
            type="button"
            aria-label="Toggle dark mode"
            className="relative flex h-9 w-16 shrink-0 items-center rounded-full border border-slate-300 bg-slate-200 p-1 transition-colors dark:border-slate-700 dark:bg-indigo-600"
          >
            <span className="absolute left-2 text-xs text-slate-500 dark:text-white">
              ☀
            </span>

            <span className="absolute right-2 text-xs text-slate-500 dark:text-white">
              ☾
            </span>

            <span className="relative z-10 h-7 w-7 rounded-full bg-white shadow-md transition-transform duration-300 dark:translate-x-7 dark:bg-slate-900" />
          </button>

          <NavLink
            to="/dashboard"
            className="rounded-lg bg-indigo-600 px-3 py-2 text-xs font-semibold text-white shadow-md shadow-indigo-100 transition-colors hover:bg-indigo-700 dark:shadow-none dark:hover:bg-indigo-500 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            <span className="sm:hidden">Start</span>
            <span className="hidden sm:inline">Start Asking</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
