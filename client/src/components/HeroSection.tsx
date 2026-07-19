import { Icons } from './Icons';
import UrlInputSection from './UrlInputSection';
import ProductMockup from './ProductMockup';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative mx-auto flex max-w-5xl flex-1 flex-col items-center justify-center px-4 py-16 text-center md:px-8"
    >
      <div className="absolute left-1/2 top-1/4 -z-10 h-[300px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-100/50 blur-3xl md:h-[400px] md:w-[600px]" />

      <div className="mb-6 inline-flex items-center space-x-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 transition-all duration-300 hover:scale-[1.02]">
        <Icons.Sparkles />

        <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">
          AI-Powered Video Intelligence
        </span>
      </div>

      <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-6xl">
        Understand Any YouTube <br />
        Video{' '}
        <span className="bg-linear-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
          with AI
        </span>
      </h1>

      <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-500">
        Paste a YouTube URL to extract transcripts and chat with any video in
        seconds. Get instant answers, summaries, and key takeaways without
        watching.
      </p>

      <UrlInputSection />

      <ProductMockup />
    </section>
  );
}

