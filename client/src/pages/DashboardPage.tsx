import UrlInputSection from "../components/UrlInputSection";
import FeatureTabs from "../components/FeatureTabs";
import ChatPanel from "../components/ChatPanel";
import { Outlet, NavLink } from "react-router-dom";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      z
      <nav className="border-b border-slate-200 bg-white px-4 py-3 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          <NavLink
            to="/"
            className="flex items-center gap-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-base font-bold text-white shadow-md shadow-indigo-200 dark:shadow-none">
              AF
            </div>

            <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white sm:text-xl">
              AskFrame
            </span>
          </NavLink>

          <div className="flex items-center">
            <button
              type="button"
              aria-label="Toggle dark mode"
              className="relative flex h-9 w-16 items-center rounded-full border border-slate-300 bg-slate-200 p-1 transition-colors dark:border-slate-700 dark:bg-indigo-600"
            >
              <span className="absolute left-2 text-xs text-slate-500 dark:text-white">
                ☀
              </span>

              <span className="absolute right-2 text-xs text-slate-500 dark:text-white">
                ☾
              </span>

              <span className="relative z-10 h-7 w-7 rounded-full bg-white shadow-md transition-transform duration-300 dark:translate-x-7 dark:bg-slate-900" />
            </button>
          </div>
        </div>
      </nav>
      <main className="flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <header className="mb-6 sm:mb-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl lg:text-4xl">
              Chat With a YouTube Video
            </h1>

            <p className="mt-2 max-w-2xl text-sm text-slate-500 dark:text-slate-400 sm:text-base">
              Add a YouTube video and ask questions about its content.
            </p>
          </header>

          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Left section */}
            <aside className="flex min-w-0 flex-col gap-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900 sm:p-5">
                <UrlInputSection />
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900 sm:p-5">
                <FeatureTabs />
              </div>
            </aside>

            <section className="min-h-125 min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900 sm:min-h-150 lg:sticky lg:top-6 lg:h-[calc(100vh-8rem)]">
              <Outlet />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
