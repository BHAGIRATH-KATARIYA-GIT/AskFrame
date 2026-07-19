import heroImg from '../assets/hero.png';
import { Icons } from './Icons';

export default function ProductMockup() {
  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden text-left max-w-4xl mx-auto transition-transform duration-300 hover:scale-[1.01] hover:shadow-slate-200">
      <div className="bg-slate-50 border-b border-slate-200 px-4 py-3.5 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3.5 h-3.5 rounded-full bg-rose-400" />
          <div className="w-3.5 h-3.5 rounded-full bg-amber-400" />
          <div className="w-3.5 h-3.5 rounded-full bg-emerald-400" />
        </div>
        <div className="bg-white border border-slate-200/80 rounded-lg px-4 md:px-8 py-1.5 text-xs text-slate-400 w-48 md:w-72 text-center mx-auto truncate font-medium">
          askframe.ai/analysis/future-of-ai
        </div>
        <div className="w-12" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[460px]">
        <div className="md:col-span-7 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col">
          <div className="relative bg-slate-900 aspect-video flex items-center justify-center overflow-hidden">
            <img src={heroImg} alt="Developer working" className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-slate-950/20 flex items-center justify-center hover:bg-slate-950/30 transition-all cursor-pointer group">
              <div className="w-16 h-16 rounded-full bg-white/95 text-indigo-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Icons.Play className="w-7 h-7 translate-x-0.5" />
              </div>
            </div>
          </div>

          <div className="p-5 flex-1 flex flex-col justify-between bg-slate-50">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-bold text-indigo-600 tracking-wide uppercase">Transcript</span>
                <span className="text-xs font-semibold text-slate-400">0:00 - 12:45</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 text-xs leading-relaxed text-slate-600">
                  <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-600 font-bold px-2 py-0.5 rounded transition-colors text-[10px]">
                    0:45
                  </button>
                  <p className="flex-1 text-slate-500">
                    Today we&apos;re going to dive deep into the architecture of neural networks and how they&apos;ve evolved over the last decade...
                  </p>
                </div>
                <div className="flex items-start space-x-3 text-xs leading-relaxed text-slate-600">
                  <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-600 font-bold px-2 py-0.5 rounded transition-colors text-[10px]">
                    1:12
                  </button>
                  <p className="flex-1 text-slate-500">
                    Understanding the gradient descent process is crucial for anyone looking to build production-grade models.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 flex flex-col justify-between bg-white">
          <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-700">AskFrame Assistant</span>
            </div>
          </div>

          <div className="p-5 space-y-4 flex-1 overflow-y-auto text-xs">
            <div className="flex justify-end">
              <div className="bg-slate-100 text-slate-700 px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[85%] leading-relaxed font-medium">
                Summarize the main technical points discussed in the first 5 minutes.
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="bg-indigo-50/70 border border-indigo-100 text-slate-700 px-4 py-3 rounded-2xl rounded-tl-sm leading-relaxed max-w-[90%]">
                <div className="font-semibold text-indigo-700 mb-1.5">In the first 5 minutes, the video covers:</div>
                <ul className="list-disc pl-4 space-y-1.5 text-slate-600">
                  <li>Historical context of ANN (Neural Nets)</li>
                  <li>Evolution of activation functions</li>
                  <li>Backpropagation fundamentals</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-slate-100 bg-slate-50">
            <div className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 flex items-center justify-between shadow-sm">
              <input
                type="text"
                placeholder="Ask anything about the video..."
                disabled
                className="text-xs text-slate-400 bg-transparent border-none outline-none flex-1 pr-2"
              />
              <button disabled className="w-6 h-6 rounded-lg bg-indigo-600/50 flex items-center justify-center text-white cursor-not-allowed">
                <Icons.Send />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
