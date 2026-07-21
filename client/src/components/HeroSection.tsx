import UrlInputSection from "./UrlInputSection";
import ProductMockup from "./ProductMockup";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[calc(100vh-72px)] w-full max-w-6xl flex-1 flex-col items-center justify-center overflow-hidden px-4 py-12 text-center sm:px-6 sm:py-16 md:px-8 lg:py-20"
    >
      <div className="absolute left-1/2 top-1/4 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-100/60 blur-3xl dark:bg-indigo-500/10 sm:h-80 sm:w-80 md:h-96 md:w-96" />

      <div className="mb-5 inline-flex max-w-full items-center rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 transition-all duration-300 hover:scale-[1.02] dark:border-indigo-500/20 dark:bg-indigo-500/10 sm:mb-6 sm:px-4">
        <span className="truncate text-[10px] font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 sm:text-xs">
          AI-Powered Video Intelligence
        </span>
      </div>

      <h1 className="mb-5 max-w-5xl text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
        Understand Any YouTube
        <br className="hidden sm:block" />
        <span className="sm:ml-2">
          Video{" "}
          <span className="bg-linear-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-violet-400">
            with AI
          </span>
        </span>
      </h1>

      <p className="mb-8 max-w-3xl text-sm leading-relaxed text-slate-500 dark:text-slate-400 sm:text-base md:mb-10 md:text-lg">
        Paste a YouTube URL to extract transcripts and chat with any video in
        seconds. Get instant answers, summaries, and key takeaways without
        watching.
      </p>

      <div className="w-full max-w-2xl">
        <UrlInputSection />
      </div>

      <div className="mt-8 w-full sm:mt-10 lg:mt-12">
        <ProductMockup />
      </div>
    </section>
  );
}
