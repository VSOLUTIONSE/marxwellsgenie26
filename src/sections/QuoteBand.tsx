export default function QuoteBand() {
  return (
    <section className="relative flex h-[480px] w-[1440px] flex-col items-center justify-center overflow-hidden bg-pale">
      <img
        src="/images/couple-gold-laugh.jpg"
        srcSet="/images/opt/couple-gold-laugh-900.webp 900w, /images/opt/couple-gold-laugh-1600.webp 1600w"
        sizes="1440px"
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "50% 20%" }}
      />
      <div className="absolute inset-x-0 top-0 h-[110px] bg-gradient-to-b from-cream to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[110px] bg-gradient-to-t from-cream to-transparent" />
      <div className="relative flex flex-col items-center gap-[22px]">
        <p className="max-w-[760px] text-center font-serif text-[38px] font-light italic leading-[140%] text-paper [text-shadow:#0A2B2159_0_2px_24px]">
          He noticed the joy. She found the home.
        </p>
        <div className="text-[9.5px] uppercase leading-3 tracking-[0.34em] text-[#FFFDF8D9]">Marxwell &amp; Genius</div>
      </div>
    </section>
  );
}
