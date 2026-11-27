const events = [
  {
    label: "Traditional Wedding",
    value: "17 December 2026",
    note: "The family compound, off Uloho Avenue",
  },
  {
    label: "White Wedding",
    value: "19 December 2026",
    note: "Holy Trinity Anglican Church",
  },
];

const places = [
  {
    label: "The Church",
    name: "Holy Trinity Anglican Church",
    note: "Olori Street, off Isoko Road",
  },
  {
    label: "The Reception",
    name: "Bamaco Women Hall",
    note: "Off Isoko Road",
  },
  {
    label: "The Traditional",
    name: "The Family Compound",
    note: "Dortie ending, off Uloho Avenue",
  },
];

export default function Invitation() {
  return (
    <section
      id="the-day"
      className="flex w-[1440px] flex-col items-center bg-cream px-14 pb-24 pt-[104px]"
    >
      <div className="flex w-[1200px] flex-col items-center border-t border-line pt-[34px]">
        <div className="text-[10.5px] uppercase leading-[14px] tracking-[0.32em] text-gold-deep">An Invitation</div>
        <p className="mt-[34px] max-w-[820px] text-balance text-center font-serif text-[38px] font-light leading-[142%] text-ink">
          Together with our families, we would love for you to join us as we celebrate the beginning of forever.
        </p>
      </div>
      <div className="mt-[52px] flex items-center gap-[22px]">
        <div className="h-px w-[58px] bg-gold" />
        <div className="font-display text-[26px] leading-8 tracking-[0.14em] text-forest-ink">M &amp; G</div>
        <div className="h-px w-[58px] bg-gold" />
      </div>
      <div className="mt-[62px] flex w-[1100px] border-t border-line pt-8">
        {events.map((item, index) => (
          <div
            key={item.label}
            className={`flex flex-1 basis-0 flex-col items-center gap-[10px] px-8 ${
              index > 0 ? "border-l border-line" : ""
            }`}
          >
            <div className="text-[9.5px] font-medium uppercase leading-3 tracking-[0.28em] text-gold-deep">
              {item.label}
            </div>
            <div className="font-display text-[30px] leading-9">{item.value}</div>
            <div className="text-center font-serif text-base italic leading-5 text-body">{item.note}</div>
          </div>
        ))}
      </div>
      <div className="mt-[46px] flex w-[1100px] border-t border-line pt-8">
        {places.map((item, index) => (
          <div
            key={item.label}
            className={`flex flex-1 basis-0 flex-col items-center gap-[8px] px-8 ${
              index > 0 ? "border-l border-line" : ""
            }`}
          >
            <div className="text-[9.5px] font-medium uppercase leading-3 tracking-[0.28em] text-gold-deep">
              {item.label}
            </div>
            <div className="text-center font-display text-[22px] leading-[130%]">{item.name}</div>
            <div className="text-center font-serif text-[15px] italic leading-5 text-body">{item.note}</div>
          </div>
        ))}
      </div>
      <div className="mt-[58px] flex w-[900px] flex-col items-center border-t border-line pt-[32px]">
        <div className="text-[9.5px] font-medium uppercase leading-3 tracking-[0.28em] text-gold-deep">Getting There</div>
        <p className="mt-[18px] text-center font-serif text-[19px] font-light leading-[168%] text-body">
          Coming from Warri or Benin, stop at any of these points along the Ughelli–Patani Expressway: Afisere
          Junction, Heroes of Faith Church, Agbara Junction, or Otovwodo. From any stop, board a bike straight to the
          church or the reception.
        </p>
        <p className="mt-[14px] text-center font-serif text-[17px] italic leading-[165%] text-body">
          For the trad, ask for Mountain of Fire Church at Dortie ending, off Uloho Avenue. Someone will meet you
          there. It's a five-minute walk to the compound.
        </p>
      </div>
    </section>
  );
}
