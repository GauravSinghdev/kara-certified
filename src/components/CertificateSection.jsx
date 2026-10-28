import { certificateCategories } from "../data/certificates.js";
import CertificateCard from "./CertificateCard.jsx";
import SearchInput from "./SearchInput.jsx";

export default function CertificateSection({
  certificates,
  activeFilter,
  onFilterChange,
  query,
  onQueryChange,
  onSelectCertificate,
}) {
  return (
    <section id="certificates" className="scroll-mt-8">
      <div className="mb-6 flex flex-col gap-4 border-t border-[#e2e2dc] pt-7 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-[#898980]">The collection</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">
            Selected credentials <span className="text-[#a4a49b]">({certificates.length})</span>
          </h2>
        </div>
        <SearchInput value={query} onChange={onQueryChange} />
      </div>

      <div className="mb-7 flex flex-wrap gap-2">
        {certificateCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => onFilterChange(category)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              activeFilter === category
                ? "bg-[#191919] text-white"
                : "border border-[#e1e1da] bg-transparent text-[#686860] hover:bg-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid auto-rows-[minmax(210px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certificates.map((certificate) => (
          <CertificateCard
            key={certificate.id}
            certificate={certificate}
            featured={certificate.featured && activeFilter === "All" && !query.trim()}
            onClick={() => onSelectCertificate(certificate)}
          />
        ))}
        {certificates.length === 0 && (
          <div className="col-span-full rounded-3xl border border-dashed border-[#d4d4cb] p-12 text-center text-[#77766f]">
            No certificates match that search. Try another term.
          </div>
        )}
        <NextMilestone />
      </div>
    </section>
  );
}

function NextMilestone() {
  return (
    <div className="flex min-h-[235px] flex-col justify-between rounded-[1.65rem] bg-[#dfece4] p-6 sm:col-span-2">
      <div className="flex items-start justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/70 text-xl">↗</span>
        <span className="text-xs uppercase tracking-[.15em] text-[#68806f]">Next milestone</span>
      </div>
      <div>
        <h3 className="max-w-sm text-2xl font-semibold leading-tight tracking-tight">Always learning.<br />Always building.</h3>
        <p className="mt-3 max-w-sm text-sm leading-6 text-[#5f7666]">New skills are in progress. Check back soon for the next achievement.</p>
        <a href="mailto:hello@example.com" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">Connect with me ↗</a>
      </div>
    </div>
  );
}
