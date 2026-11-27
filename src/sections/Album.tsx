const frames = [
  { image: "/images/hero-couple.jpg", position: "50% 30%" },
  { image: "/images/hands-clasped.jpg", position: "50% 30%" },
  { image: "/images/couple-seated.jpg", position: "50% 30%" },
  { image: "/images/couple-gold-laugh.jpg", position: "50% 30%" },
  { image: "/images/couple-agbada-full.jpg", position: "50% 30%" },
];

export default function Album() {
  return (
    <section id="album" className="flex w-[1440px] flex-col items-center bg-cream pb-[22px]">
      <div className="flex flex-col items-center pb-[52px] pt-24">
        <div className="text-[10.5px] uppercase leading-[14px] tracking-[0.32em] text-gold-deep">Gallery</div>
        <div className="mt-4 font-display text-[58px] leading-[110%]">From the album</div>
      </div>
      <div className="flex h-[430px] w-[1440px] shrink-0 gap-[6px]">
        {frames.map((frame) => (
          <img
            key={frame.image + frame.position}
            src={frame.image}
            srcSet={`/images/opt/${frame.image.replace("/images/", "").replace(".jpg", "")}-900.webp 900w`}
            sizes="288px"
            alt=""
            loading="lazy"
            decoding="async"
            className="min-w-0 flex-1 basis-0 bg-pale object-cover"
            style={{ objectPosition: frame.position }}
          />
        ))}
      </div>
      <div className="pt-5">
        <div className="text-[9px] uppercase leading-3 tracking-[0.3em] text-muted">
          A few of our favourite frames · Swipe to explore
        </div>
      </div>
    </section>
  );
}
