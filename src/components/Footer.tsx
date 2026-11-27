import { Link } from "react-router-dom";

const links = [
  { label: "The Day", to: "/#the-day" },
  { label: "Our Story", to: "/our-story" },
  { label: "Dress Code", to: "/#dress-code" },
  { label: "Gift Us", to: "/gifts" },
];

export default function Footer() {
  return (
    <div className="flex w-[1440px] flex-col items-center bg-cream px-[120px] pb-[46px] max-md:w-full max-md:px-6">
      <div className="flex w-[1200px] flex-col items-center border-t border-line pt-[58px] max-md:w-full max-md:pt-10">
        <div className="text-[10px] uppercase leading-3 tracking-[0.34em] text-gold-deep">With love</div>
        <div className="mt-[18px] font-display text-[56px] leading-[110%] max-md:text-[32px]">Marxwell &amp; Genius</div>
        <div className="mt-5 flex items-center gap-[18px]">
          <div className="h-px w-10 bg-gold" />
          <div className="text-[10px] uppercase leading-3 tracking-[0.28em] text-body">2026 · Nigeria</div>
          <div className="h-px w-10 bg-gold" />
        </div>
        <div className="mt-[42px] flex flex-wrap items-center justify-center gap-x-6 gap-y-3 max-md:mt-8">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-[9.5px] uppercase leading-3 tracking-[0.22em] text-body transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mt-[46px] flex w-[1200px] items-center justify-between border-t border-line pt-[22px] max-md:w-full max-md:flex-col max-md:items-start max-md:gap-3 max-md:pt-5">
          <div className="font-serif text-base italic leading-5 text-gold-deep">And the rest, as they say, is love.</div>
          <div className="text-[8.5px] uppercase leading-3 tracking-[0.22em] text-muted">MG · 2026</div>
        </div>
      </div>
    </div>
  );
}
