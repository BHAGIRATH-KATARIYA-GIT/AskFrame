export default function StatsSection() {
  const stats = [
    { value: '10M+', label: 'Videos Analyzed' },
    { value: '99.9%', label: 'Accuracy Rate' },
    { value: '50+', label: 'Languages' },
    { value: '20k+', label: 'Active Users' },
  ];

  return (
    <section className="bg-slate-50 py-16 border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-indigo-600 mb-2">{stat.value}</div>
              <div className="text-xs font-bold text-slate-400 tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
