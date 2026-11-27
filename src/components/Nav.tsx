import { Link } from "react-router-dom";
import { PlayIcon } from "./icons";
import { useMusic } from "./MusicProvider";

const links = [
  { label: "The Day", to: "/#the-day", key: "the-day" },
  { label: "Our Story", to: "/our-story", key: "our-story" },
  { label: "Dress Code", to: "/#dress-code", key: "dress-code" },
  { label: "Q&A", to: "/q-a", key: "q-a" },
  { label: "Gift Us", to: "/gifts", key: "gifts" },
];

export default function Nav({ active }: { active?: string }) {
  const { isPlaying, toggle } = useMusic();

  return (
    <header className="absolute left-0 top-0 z-20 flex w-[1440px] items-center justify-between px-14 py-[34px] max-md:w-full max-md:flex-col max-md:items-start max-md:gap-4 max-md:px-6 max-md:py-5">
      <Link to="/" className="font-display text-[19px] leading-6 tracking-[0.12em] text-cream">
        M · G
      </Link>
      <nav className="flex items-center gap-[38px] max-md:w-full max-md:gap-5 max-md:overflow-x-auto max-md:pb-1">
        {links.map((link) => (
          <Link
            key={link.key}
            to={link.to}
            className={`text-[10.5px] uppercase leading-[14px] tracking-[0.22em] transition-colors hover:text-white max-md:shrink-0 max-md:py-2 ${
              active === link.key ? "text-mist-sage" : "text-cream"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <button
          type="button"
          onClick={toggle}
          aria-label={isPlaying ? "Pause our song" : "Play our song"}
          className="flex items-center gap-[10px] rounded-full border border-[#F7F4F08C] py-[9px] pl-3 pr-4 text-cream transition-colors hover:border-cream hover:bg-[#F7F4F01A]"
        >
          {isPlaying ? (
            <span className="flex items-center gap-[3px]">
              <span className="h-3 w-[2px] rounded-full bg-cream" />
              <span className="h-3 w-[2px] rounded-full bg-cream" />
            </span>
          ) : (
            <PlayIcon />
          )}
          <span className="text-[9.5px] font-light uppercase leading-3 tracking-[0.18em]">Our Song</span>
        </button>
      </nav>
    </header>
  );
}
