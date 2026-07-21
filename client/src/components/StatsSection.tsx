export default function StatsSection() {
  const stats = [
    { value: "10M+", label: "Videos Analyzed" },
    { value: "99.9%", label: "Accuracy Rate" },
    { value: "50+", label: "Languages" },
    { value: "20k+", label: "Active Users" },
  ];

  return (
    <section className="border-y border-slate-100 bg-slate-50 py-12 transition-colors dark:border-slate-800 dark:bg-slate-900 sm:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 text-center sm:gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl px-2 py-3 transition-colors hover:bg-white dark:hover:bg-slate-800 sm:px-4"
            >
              <div className="mb-2 wrap-break-word text-2xl font-black text-indigo-600 dark:text-indigo-400 sm:text-4xl md:text-5xl">
                {stat.value}
              </div>

              <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500 sm:text-xs sm:tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
