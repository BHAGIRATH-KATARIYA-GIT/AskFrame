export default function Footer() {
  return (
    <footer
      id="how-it-works"
      className="border-t border-slate-100 bg-white pb-10 pt-14 transition-colors dark:border-slate-800 dark:bg-slate-950 sm:pb-12 sm:pt-16 lg:pt-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="mb-12 grid grid-cols-1 gap-10 md:mb-16 md:grid-cols-12 md:gap-12">
          {/* Brand section */}
          <div className="space-y-5 md:col-span-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-base font-bold text-white shadow-md shadow-indigo-200 dark:shadow-none">
                AF
              </div>

              <span className="text-lg font-bold text-slate-900 dark:text-white">
                AskFrame
              </span>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-slate-500 dark:text-slate-400 md:pr-8">
              Making the world&apos;s video knowledge accessible and interactive
              through advanced AI analysis.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="#share"
                aria-label="Share AskFrame"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-colors hover:border-indigo-600 hover:bg-indigo-50 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-indigo-500 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-400"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 12l10-6m-10 6l10 6M7 12h10"
                  />
                </svg>
              </a>

              <a
                href="mailto:info@askframe.ai"
                aria-label="Email AskFrame"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-colors hover:border-indigo-600 hover:bg-indigo-50 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-indigo-500 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-400"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Footer links */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:col-span-8 md:gap-8">
            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Product
              </h4>

              <ul className="space-y-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                <li>
                  <a
                    href="#features"
                    className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    Features
                  </a>
                </li>

                <li>
                  <a
                    href="#pricing"
                    className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    Pricing
                  </a>
                </li>

                <li>
                  <a
                    href="#integrations"
                    className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Resources
              </h4>

              <ul className="space-y-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                <li>
                  <a
                    href="#docs"
                    className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    Documentation
                  </a>
                </li>

                <li>
                  <a
                    href="#api"
                    className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    API Reference
                  </a>
                </li>

                <li>
                  <a
                    href="#community"
                    className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Company
              </h4>

              <ul className="space-y-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                <li>
                  <a
                    href="#about"
                    className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    href="#blog"
                    className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    Blog
                  </a>
                </li>

                <li>
                  <a
                    href="#privacy"
                    className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col gap-4 border-t border-slate-100 pt-6 text-center text-xs text-slate-400 dark:border-slate-800 dark:text-slate-500 sm:pt-8 md:flex-row md:items-center md:justify-between md:text-left">
          <p className="max-w-2xl leading-relaxed">
            © 2026 AskFrame AI. All rights reserved. YouTube is a trademark of
            Google LLC.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:justify-end">
            <a
              href="#terms"
              className="transition-colors hover:text-slate-700 dark:hover:text-slate-300"
            >
              Terms of Service
            </a>

            <a
              href="#privacy"
              className="transition-colors hover:text-slate-700 dark:hover:text-slate-300"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

