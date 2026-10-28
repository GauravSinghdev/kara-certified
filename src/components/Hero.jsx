export default function Hero({ certificateCount }) {
  return (
    <section className="grid gap-8 pb-12 pt-10 md:grid-cols-[1.2fr_.8fr] md:items-end md:pb-16 md:pt-16">
      <div>
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e1e1da] bg-white px-3 py-1.5 text-xs font-medium text-[#606058]">
          <span className="h-2 w-2 rounded-full bg-emerald-500" /> A living record of learning
        </div>
        <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl md:text-7xl">
          Proof of progress.<br /><span className="text-[#999990]">Built one skill at a time.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-[#6b6b63] md:text-lg">
          A curated collection of certifications, courses, and milestones that reflect my journey across technology and creative problem-solving.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3 md:pb-2">
        <Stat value={String(certificateCount).padStart(2, "0")} label="Certificates" />
        <Stat value="04" label="Focus areas" />
        <Stat value="’26" label="Current year" dark />
      </div>
    </section>
  );
}

function Stat({ value, label, dark = false }) {
  return (
    <div className={`rounded-3xl p-4 sm:p-5 ${dark ? "bg-[#191919] text-white" : "bg-[#e8e7e0]"}`}>
      <p className="text-3xl font-semibold tracking-tight">{value}</p>
      <p className={`mt-2 text-xs sm:text-sm ${dark ? "text-white/60" : "text-[#6b6b63]"}`}>{label}</p>
    </div>
  );
}
