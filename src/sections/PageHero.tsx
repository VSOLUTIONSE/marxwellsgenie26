import Nav from "../components/Nav";

type PageHeroProps = {
  image: string;
  position: string;
  veil: string;
  marker: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  active?: string;
};

export default function PageHero({
  image,
  position,
  veil,
  marker,
  eyebrow,
  title,
  subtitle,
  active,
}: PageHeroProps) {
  const base = image.replace("/images/", "").replace(/\.jpg$/, "");
  return (
    <section className="relative flex h-[680px] w-[1440px] flex-col items-center justify-end overflow-hidden bg-pale pb-[86px] max-md:h-[460px] max-md:w-full max-md:px-6 max-md:pb-12">
      <img
        src={image}
        srcSet={`/images/opt/${base}-900.webp 900w, /images/opt/${base}-1600.webp 1600w`}
        sizes="1440px"
        alt=""
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: position }}
      />
      <div className="absolute inset-0" style={{ backgroundImage: veil }} />
      <Nav active={active} />
      <div className="absolute left-14 top-[112px] flex items-center gap-[14px] max-md:left-6 max-md:top-[152px]">
        <div className="h-px w-[34px] bg-mist-sage" />
        <div className="text-[9.5px] font-medium uppercase leading-3 tracking-[0.3em] text-mist">{marker}</div>
      </div>
      <div className="relative flex flex-col items-center">
        <div className="text-[10.5px] uppercase leading-[14px] tracking-[0.34em] text-[#E3D5A6] [text-shadow:#0A2B21B3_0_1px_12px]">{eyebrow}</div>
        <h1 className="mt-6 font-display text-[104px] leading-none tracking-[0.005em] text-paper max-md:mt-4 max-md:text-[46px] [text-shadow:#0A2B2166_0_2px_30px]">{title}</h1>
        <p className="mt-[18px] font-serif text-[23px] italic leading-[140%] text-[#EDE9DF] max-md:text-[17px]">{subtitle}</p>
      </div>
    </section>
  );
}
