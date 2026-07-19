

export default function FeaturesSection() {
  const features = [
    {
      iconBg: 'bg-indigo-50',
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Transcript Extraction',
      description:
        'Get instant, searchable text from any video. Copy segments, export files, or use them to navigate long lectures with pinpoint accuracy.',
    },
    {
      iconBg: 'bg-emerald-50',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Grounded AI',
      description:
        "Answers aren't hallucinated—they're extracted directly from the video content. Our AI provides timestamps as citations for every claim.",
    },
    {
      iconBg: 'bg-orange-50',
      icon: (
        <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Faster Learning',
      description:
        'Summarize hours of video in minutes. Identify key themes, skip the filler, and focus on the information that actually matters to you.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
          Master Your Learning Workflow
        </h2>
        <div className="w-16 h-1 bg-indigo-600 rounded-full mx-auto mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white border border-slate-200/80 rounded-2xl p-8 text-left transition-all duration-300 hover:shadow-xl hover:shadow-slate-100 hover:border-slate-300/80 group"
            >
              <div className={`w-12 h-12 ${feature.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
