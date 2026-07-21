export default function FeaturesSection() {
  const features = [
    {
      iconBg: "bg-indigo-50",
      icon: (
        <svg
          className="w-6 h-6 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: "Transcript Extraction",
      description:
        "Get instant, searchable text from any video. Copy segments, export files, or use them to navigate long lectures with pinpoint accuracy.",
    },
    {
      iconBg: "bg-emerald-50",
      icon: (
        <svg
          className="w-6 h-6 text-emerald-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Grounded AI",
      description:
        "Answers aren't hallucinated—they're extracted directly from the video content. Our AI provides timestamps as citations for every claim.",
    },
    {
      iconBg: "bg-orange-50",
      icon: (
        <svg
          className="w-6 h-6 text-orange-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Faster Learning",
      description:
        "Summarize hours of video in minutes. Identify key themes, skip the filler, and focus on the information that actually matters to you.",
    },
  ];

  return (
    <section
      id="features"
      className="border-t border-slate-100 bg-white py-14 transition-colors dark:border-slate-800 dark:bg-slate-950 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl lg:text-4xl">
          Master Your Learning Workflow
        </h2>

        <div className="mx-auto mb-10 mt-4 h-1 w-14 rounded-full bg-indigo-600 sm:mb-12 sm:w-16 lg:mb-16" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-slate-200/80 bg-white p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-100/80 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none dark:hover:border-slate-700 dark:hover:bg-slate-900/80 sm:p-6 lg:p-8"
            >
              <div
                className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 sm:mb-6 sm:h-12 sm:w-12 ${feature.iconBg}`}
              >
                {feature.icon}
              </div>

              <h3 className="mb-2 text-base font-bold text-slate-900 dark:text-white sm:mb-3 sm:text-lg">
                {feature.title}
              </h3>

              <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
