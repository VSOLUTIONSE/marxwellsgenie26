import { useMusic } from "./MusicProvider";

export default function MusicWidget() {
  const { isPlaying, toggle } = useMusic();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isPlaying ? "Pause our song" : "Play our song"}
      className="fixed bottom-10 right-12 z-50 flex items-center gap-3 rounded-full border border-[#F7F4F033] bg-forest px-[18px] py-3 text-cream shadow-[0_16px_40px_-16px_rgba(10,43,33,0.65)] transition-colors hover:bg-forest-deep max-md:bottom-4 max-md:right-4"
    >
      <span className="flex h-[14px] items-end gap-[2px]">
        {[0, 1, 2].map((bar) => (
          <span
            key={bar}
            className={`h-[14px] w-[2px] rounded-full bg-cream ${isPlaying ? "eq-bar" : ""}`}
            style={{
              animationDelay: `${bar * 0.18}s`,
              transform: isPlaying ? undefined : "scaleY(0.35)",
            }}
          />
        ))}
      </span>
      <span className="text-[9px] uppercase leading-3 tracking-[0.2em]">
        {isPlaying ? "Our Song" : "Play our song"}
      </span>
    </button>
  );
}
