export default function AboutSection() {
  return (
    <section id="about" className="mt-16 grid gap-6 rounded-[2rem] bg-[#191919] p-7 text-white sm:p-10 md:grid-cols-[1fr_auto] md:items-end">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[.18em] text-white/45">A little about this page</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Curiosity is the credential that keeps growing.</h2>
        <p className="mt-4 max-w-xl text-sm leading-6 text-white/60">This portfolio is designed to make learning visible: what I studied, who issued it, and where I want to go next.</p>
      </div>
      <a href="mailto:hello@example.com" className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#e8e7e0]">Get in touch ↗</a>
    </section>
  );
}
