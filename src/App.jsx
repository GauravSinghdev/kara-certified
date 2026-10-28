import { useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import CertificateSection from "./components/CertificateSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import Footer from "./components/Footer.jsx";
import CertificateModal from "./components/CertificateModal.jsx";
import { certificates } from "./data/certificates.js";

export default function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const visibleCertificates = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return certificates.filter((certificate) => {
      const matchesCategory =
        activeFilter === "All" || certificate.category === activeFilter;
      const searchableText = [
        certificate.title,
        certificate.issuer,
        certificate.category,
        certificate.description,
      ].join(" ").toLowerCase();

      return matchesCategory && searchableText.includes(normalizedQuery);
    });
  }, [activeFilter, query]);

  return (
    <div className="min-h-screen bg-[#f7f7f4] text-[#191919]">
      <Header />
      <main id="home" className="mx-auto max-w-7xl px-5 pb-16 md:px-10">
        <Hero certificateCount={certificates.length} />
        <CertificateSection
          certificates={visibleCertificates}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          query={query}
          onQueryChange={setQuery}
          onSelectCertificate={setSelectedCertificate}
        />
        <AboutSection />
        <Footer />
      </main>

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </div>
  );
}
