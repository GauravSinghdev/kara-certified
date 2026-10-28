export default function CertificateCard({ certificate, featured = false, onClick }) {
  const { title, issuer, date, category, icon, color, description } = certificate;

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick();
        }
      }}
      className={`group relative flex min-h-[235px] cursor-pointer flex-col overflow-hidden rounded-[1.65rem] border border-black/[.04] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[.06] focus:outline-none focus:ring-2 focus:ring-black/30 ${
        featured ? "bg-[#e8e5f8] sm:col-span-2 sm:row-span-2 sm:min-h-[390px] sm:p-7" : "bg-white"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className={`grid place-items-center rounded-2xl font-semibold tone-${color} ${featured ? "h-14 w-14 text-2xl" : "h-11 w-11 text-lg"}`}>
          {icon}
        </div>
        <span className="rounded-full border border-black/[.08] px-3 py-1 text-[11px] font-medium text-[#77766f]">{category}</span>
      </div>
      <div className="mt-auto pt-9">
        <p className="mb-2 text-xs font-medium text-[#77766f]">{issuer} <span className="px-1">·</span> {date}</p>
        <h3 className={`max-w-sm font-semibold leading-tight tracking-tight ${featured ? "text-3xl sm:text-4xl" : "text-xl"}`}>{title}</h3>
        <p className="mt-3 max-w-md text-sm leading-6 text-[#77766f]">{description}</p>
        <div className="mt-5 flex items-center justify-between border-t border-black/[.08] pt-4 text-sm">
          <span className="text-[#77766f]">View credential</span>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-black text-white transition group-hover:rotate-45">↗</span>
        </div>
      </div>
      {featured && (
        <div className="pointer-events-none absolute right-[-18px] top-24 hidden h-44 w-44 rounded-full border border-violet-400/30 sm:block">
          <div className="absolute inset-4 rounded-full border border-violet-400/30" />
          <div className="absolute inset-8 rounded-full border border-violet-400/30" />
        </div>
      )}
    </article>
  );
}
