const shades = [
  { label: "Emerald Green", color: "#0E4A36", ring: false },
  { label: "White", color: "#FFFDF8", ring: true },
  { label: "Gold", color: "#C9A227", ring: false },
];

export default function DressCode() {
  return (
    <section id="dress-code" className="flex w-[1440px] flex-col items-center bg-cream px-[120px] pb-[132px] pt-[128px] max-md:w-full max-md:px-6 max-md:pb-16 max-md:pt-16">
      <div className="flex flex-col items-center">
        <div className="text-[10.5px] uppercase leading-[14px] tracking-[0.32em] text-gold-deep">What To Wear</div>
        <div className="mt-5 text-center font-display text-[60px] leading-[110%] max-md:text-[34px]">Emerald, white &amp; gold</div>
        <p className="mt-[18px] max-w-[600px] text-center font-serif text-xl font-light leading-[160%] text-body">
          The colours of the day are emerald green, white and gold. Wear them your way: deep emerald, crisp white, or
          a touch of gold.
        </p>
      </div>
      <div className="mt-[62px] flex items-start gap-[110px] max-md:mt-10 max-md:gap-10">
        {shades.map((shade) => (
          <div key={shade.label} className="flex flex-col items-center gap-[18px]">
            <div
              className={`h-[104px] w-[104px] shrink-0 rounded-full max-md:h-[76px] max-md:w-[76px] ${shade.ring ? "border border-[#C9CDBF]" : ""}`}
              style={{ backgroundColor: shade.color }}
            />
            <div className="text-[9.5px] font-medium uppercase leading-3 tracking-[0.24em] text-body">
              {shade.label}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-[58px] flex w-[900px] flex-col items-center border-t border-line pt-[30px] max-md:w-full max-md:mt-10">
        <p className="text-center font-serif text-[19px] italic leading-[160%] text-body">
          Garden-party elegance: flowing fabrics, and flat shoes are always welcome.
        </p>
      </div>
    </section>
  );
}
