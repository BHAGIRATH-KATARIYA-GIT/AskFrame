

const takeawayItems = [
  'AI is transitioning from simple chat interfaces to proactive reasoning agents.',
  'The rise of multimodal architectures that process text, audio, and video.',
  'Concept of Recursive Self-Optimization where AI can refine its own logic.',
  'Ethical considerations regarding autonomous agency in professional settings.',
];

export default function ChatMessage() {
  return (
    <div className="flex justify-start">
      <div className="mr-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-indigo-200 bg-indigo-100 shadow-sm">
        {/* icon */}
      </div>

      <div className="max-w-[80%] rounded-2xl rounded-tl-sm border border-slate-200/80 bg-white px-4 py-3 text-sm leading-relaxed text-slate-700 shadow-sm">
        <p className="mb-2 font-bold text-slate-800">
          Here are the key takeaways from the video:
        </p>

        <ul className="list-disc space-y-2 pl-4 text-slate-600">
          {takeawayItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

