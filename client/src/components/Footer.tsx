import { Icons } from './Icons';

export default function Footer() {
  return (
    <footer id="how-it-works" className="bg-white pt-20 pb-12 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4 space-y-5">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-base shadow-md shadow-indigo-200">
                AF
              </div>
              <span className="font-bold text-lg text-slate-900">AskFrame</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed pr-8">
              Making the world&apos;s video knowledge accessible and interactive through advanced AI analysis.
            </p>
            <div className="flex space-x-4">
              <a
                href="#share"
                className="w-8 h-8 rounded-full border border-slate-200 hover:border-indigo-600 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50/50 transition-colors"
              >
                <Icons.Share />
              </a>
              <a
                href="mailto:info@askframe.ai"
                className="w-8 h-8 rounded-full border border-slate-200 hover:border-indigo-600 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50/50 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-slate-500 font-medium">
                <li><a href="#features" className="hover:text-indigo-600 transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a></li>
                <li><a href="#integrations" className="hover:text-indigo-600 transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-4">Resources</h4>
              <ul className="space-y-3 text-sm text-slate-500 font-medium">
                <li><a href="#docs" className="hover:text-indigo-600 transition-colors">Documentation</a></li>
                <li><a href="#api" className="hover:text-indigo-600 transition-colors">API Reference</a></li>
                <li><a href="#community" className="hover:text-indigo-600 transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-slate-500 font-medium">
                <li><a href="#about" className="hover:text-indigo-600 transition-colors">About Us</a></li>
                <li><a href="#blog" className="hover:text-indigo-600 transition-colors">Blog</a></li>
                <li><a href="#privacy" className="hover:text-indigo-600 transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 space-y-4 md:space-y-0">
          <p>© 2024 AskFrame AI. All rights reserved. YouTube is a trademark of Google LLC.</p>
          <div className="flex space-x-6">
            <a href="#terms" className="hover:text-slate-600 transition-colors">Terms of Service</a>
            <a href="#privacy" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
