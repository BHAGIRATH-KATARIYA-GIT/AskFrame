import UrlInputSection from "./UrlInputSection";
import ProductMockup from "./ProductMockup";
import { ArrowRight} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[calc(100vh-64px)] w-full max-w-6xl flex-col items-center justify-center overflow-hidden bg-white px-4 py-10 text-center text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white sm:min-h-[calc(100vh-72px)] sm:px-6 sm:py-14 md:px-8 md:py-16 lg:py-20"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-200/50 blur-3xl dark:bg-indigo-600/20 sm:h-72 sm:w-72 md:h-96 md:w-96" />

      <div className="mb-5 inline-flex max-w-full items-center rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 transition-all duration-300 hover:scale-[1.02] dark:border-indigo-400/20 dark:bg-indigo-500/10 sm:mb-6 sm:px-4">
        <span className="truncate text-[10px] font-bold uppercase tracking-[0.12em] text-indigo-700 dark:text-indigo-300 sm:text-xs sm:tracking-wider">
          AI-Powered Video Intelligence
        </span>
      </div>

      <h1 className="mb-5 max-w-5xl text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 transition-colors dark:text-slate-50 sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
        Understand Any YouTube
        <br className="hidden sm:block" />
        <span className="sm:ml-2">
          Video{" "}
          <span className="bg-linear-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-violet-400">
            with AI
          </span>
        </span>
      </h1>

      <p className="mb-7 max-w-3xl text-sm leading-6 text-slate-600 transition-colors dark:text-slate-400 sm:mb-8 sm:text-base sm:leading-7 md:mb-10 md:text-lg">
        Paste a YouTube URL to extract transcripts and chat with any video in
        seconds. Get instant answers, summaries, and key takeaways without
        watching.
      </p>

      <div className="w-full max-w-2xl">
        <div
          role="button"
          tabIndex={0}
          onClick={() => navigate("/dashboard")}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              navigate("/dashboard");
            }
          }}
          className="flex w-full cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-white p-2 shadow-sm transition-all hover:border-indigo-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:hover:border-indigo-500"
        >
          <div className="flex-1 px-3 text-left text-sm text-slate-400 dark:text-slate-500">
            Paste a YouTube URL in the dashboard
          </div>

          <div className="flex shrink-0 items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 dark:hover:bg-indigo-500">
            Open Dashboard
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>

      <div className="mt-7 w-full min-w-0 overflow-hidden sm:mt-10 lg:mt-12">
        <ProductMockup />
      </div>
    </section>
  );
}
