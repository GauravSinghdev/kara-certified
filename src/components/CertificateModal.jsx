import { useEffect, useState } from "react";

export default function CertificateModal({ certificate, onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCopied(false);
  }, [certificate]);

  useEffect(() => {
    if (!certificate) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [certificate, onClose]);

  if (!certificate) return null;

  async function copyCredentialId() {
    try {
      await navigator.clipboard.writeText(certificate.credentialId);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div role="dialog" aria-modal="true" aria-labelledby="certificate-modal-title" className="w-full max-w-lg rounded-[2rem] bg-[#fbfbf8] p-6 shadow-2xl sm:p-8">
        <div className="flex items-start justify-between">
          <div className={`grid h-14 w-14 place-items-center rounded-2xl text-2xl font-semibold tone-${certificate.color}`}>{certificate.icon}</div>
          <button type="button" onClick={onClose} className="grid h-9 w-9 place-items-center rounded-full border border-[#e1e1da] hover:bg-white" aria-label="Close dialog">×</button>
        </div>
        <p className="mt-7 text-xs font-semibold uppercase tracking-[.16em] text-[#8a8a81]">{certificate.issuer} · {certificate.date}</p>
        <h2 id="certificate-modal-title" className="mt-2 text-3xl font-semibold tracking-tight">{certificate.title}</h2>
        <p className="mt-4 text-sm leading-6 text-[#686860]">{certificate.description}</p>
        {certificate.image && (
          <img src={certificate.image} alt={`${certificate.title} certificate`} className="mt-5 max-h-64 w-full rounded-xl border border-[#e1e1da] object-contain" />
        )}
        <div className="mt-6 rounded-2xl border border-[#e1e1da] bg-white p-4">
          <p className="text-xs text-[#8a8a81]">Credential ID <span className="ml-1 text-[10px]">(replace demo value)</span></p>
          <div className="mt-2 flex items-center justify-between gap-3">
            <code className="break-all text-sm font-medium">{certificate.credentialId}</code>
            <button type="button" onClick={copyCredentialId} className="shrink-0 rounded-full bg-[#191919] px-3 py-2 text-xs font-medium text-white">{copied ? "Copied!" : "Copy ID"}</button>
          </div>
        </div>
        {certificate.verificationUrl ? (
          <a href={certificate.verificationUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-full bg-[#191919] px-5 py-3 text-sm font-medium text-white hover:bg-black/80">Verify certificate ↗</a>
        ) : (
          <p className="mt-4 text-xs leading-5 text-[#8a8a81]">Demo content only. Add a real verification URL before publishing.</p>
        )}
      </div>
    </div>
  );
}
