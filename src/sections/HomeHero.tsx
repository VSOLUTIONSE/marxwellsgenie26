import Nav from "../components/Nav";

export default function HomeHero() {
  return (
    <section className="relative flex h-[880px] w-[1440px] flex-col items-center justify-end overflow-hidden bg-pale max-md:h-[600px] max-md:w-full">
      <img
        src="/images/hero-couple.jpg"
        srcSet="/images/opt/hero-couple-900.webp 900w, /images/opt/hero-couple-1600.webp 1600w"
        sizes="1440px"
        alt=""
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "50% 30%" }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #0A2B2140 0%, #0A2B210D 18%, #0A2B2100 38%, #0A2B2180 80%, #0A2B21CC 92%, #0A2B21E6 100%)",
        }}
      />
      <Nav />
      <div className="relative flex flex-col items-center pb-[42px] max-md:pb-8">
        <div className="flex flex-col items-center gap-1">
          <div className="font-display text-[118px] leading-[96%] tracking-[0.01em] text-cream max-md:text-[54px]">Marxwell</div>
          <div className="py-[6px] font-serif text-[40px] italic leading-none text-cream max-md:text-[24px]">and</div>
          <div className="font-display text-[118px] leading-[96%] tracking-[0.01em] text-cream max-md:text-[54px]">Genius</div>
        </div>
        <div className="mt-[34px] flex items-center gap-[18px]">
          <div className="h-px w-[46px] bg-[#F7F4F066]" />
          <div className="text-[11px] uppercase leading-[14px] tracking-[0.3em] text-cream">
            2026
          </div>
          <div className="h-px w-[46px] bg-[#F7F4F066]" />
        </div>
      </div>
    </section>
  );
}
