import { useState } from "react";

const frames = [
  { image: "/images/hero-couple.jpg", position: "50% 30%" },
  { image: "/images/hands-clasped.jpg", position: "50% 30%" },
  { image: "/images/couple-seated.jpg", position: "50% 30%" },
  { image: "/images/couple-gold-laugh.jpg", position: "50% 30%" },
  { image: "/images/couple-agbada-full.jpg", position: "50% 30%" },
];

export default function Album() {
  const [paused, setPaused] = useState(false);

  return (
    <section id="album" className="flex w-[1440px] flex-col items-center bg-cream pb-[22px] max-md:w-full">
      <div className="flex flex-col items-center pb-[52px] pt-24 max-md:pb-8 max-md:pt-16">
        <div className="text-[10.5px] uppercase leading-[14px] tracking-[0.32em] text-gold-deep">Gallery</div>
        <div className="mt-4 font-display text-[58px] leading-[110%] max-md:text-[34px]">From the album</div>
      </div>
      <div className="w-[1440px] overflow-hidden max-md:w-full">
        <div
          className="album-track flex h-[430px] max-md:h-[260px]"
          style={{ animationPlayState: paused ? "paused" : undefined }}
          onPointerDown={() => setPaused(true)}
          onPointerUp={() => setPaused(false)}
          onPointerLeave={() => setPaused(false)}
          onPointerCancel={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          {[0, 1].map((group) => (
            <div
              key={group}
              aria-hidden={group === 1}
              className={`flex h-full shrink-0 gap-[6px] pr-[6px] ${
                group === 1 ? "hidden max-md:flex" : "w-full max-md:w-auto"
              }`}
            >
              {frames.map((frame) => (
                <img
                  key={frame.image + frame.position}
                  src={frame.image}
                  srcSet={`/images/opt/${frame.image.replace("/images/", "").replace(".jpg", "")}-900.webp 900w`}
                  sizes="288px"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="min-w-0 flex-1 basis-0 select-none bg-pale object-cover max-md:w-[300px] max-md:flex-none max-md:basis-auto" draggable={false}
                  style={{ objectPosition: frame.position }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="pt-5">
        <div className="text-[9px] uppercase leading-3 tracking-[0.3em] text-muted">
          A few of our favourite frames
        </div>
      </div>
    </section>
  );
}
