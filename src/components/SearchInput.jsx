import { Search } from "lucide-react";

export default function SearchInput({ value, onChange }) {
  return (
    <label className="relative block w-full md:max-w-xs">
      <span className="sr-only">Search certificates</span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8a8a81]"
      >
        <Search size={20} />
      </span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search certificates..."
        className="w-full rounded-full border border-[#e1e1da] bg-white py-3 pl-10 pr-4 text-sm outline-none transition placeholder:text-[#a1a198] focus:border-[#999990]"
      />
    </label>
  );
}
