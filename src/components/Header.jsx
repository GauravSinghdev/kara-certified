export default function Header() {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-10">
      <a
        href="#home"
        className="flex items-center gap-3 font-semibold tracking-tight"
      >
        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#171717] text-lg text-white">
          ✳
        </span>
        <span>
          kara<span className="text-[#8c8c84]">.certified</span>
        </span>
      </a>
      <nav className="hidden items-center gap-7 text-sm text-[#66665f] md:flex">
        <a className="hover:text-black" href="#certificates">
          Certificates
        </a>
        <a className="hover:text-black" href="#about">
          About
        </a>
      </nav>
      <a
        href="https://www.linkedin.com/in/gaurav-singh-898072176"
        target="_blank"
        className="rounded-full border border-[#deded7] px-4 py-2 text-sm font-medium transition hover:bg-white"
      >
        Let's connect ↗
      </a>
    </header>
  );
}
