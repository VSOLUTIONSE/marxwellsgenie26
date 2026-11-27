import type { ReactNode } from "react";

type Chapter = {
  date: string;
  title: string;
  body: ReactNode;
  image: string;
  position: string;
  reversed: boolean;
};

const highlight = "font-serif italic text-[#0F5A3C]";

const chapters: Chapter[] = [
  {
    date: "28 September 2024",
    title: "A glance that lingered",
    body: (
      <>
        It was my very first time attending Refresh in person, nearly two months after I joined the Votage. I wore
        simplicity that day, never imagining it would be noticed. But a young man named Marxwell noticed. And he knew
        he needed to tap from my overflowing wells of joy. The joy I exude, he says, is{" "}
        <em className={highlight}>beautiful, pure and sincere.</em>
      </>
    ),
    image: "/images/couple-agbada-full.jpg",
    position: "50% 0%",
    reversed: false,
  },
  {
    date: "29 September 2024",
    title: "Seen again",
    body: (
      <>
        The very next day, at our Trybe Sunday, he saw me for the second time. (I looked especially pretty that day,
        if I may say so myself.) This time he saw a <em className={highlight}>happy, bubbly and wonderfully energetic</em>{" "}
        girl, and his curiosity only grew.
      </>
    ),
    image: "/images/couple-gold-laugh.jpg",
    position: "50% 14%",
    reversed: true,
  },
  {
    date: "26 March 2025",
    title: "Our first hello",
    body: (
      <>
        All the while, I had no idea he existed. Then one evening, after a combined connect meeting, I found him
        chatting with one of my friends. I walked over to say hi, and his handsomeness was simply too bright to miss.
        I remember thinking, <em className={highlight}>“Who is this fine man?”</em> We exchanged names and warm
        pleasantries, and I went home not knowing that my heart had just met its home.
      </>
    ),
    image: "/images/couple-agbada-hold.jpg",
    position: "50% 8%",
    reversed: false,
  },
  {
    date: "Early April 2025",
    title: "Hello, King Marx",
    body: (
      <>
        I soon forgot about him, until he was crowned Most Active Member of the Month for March on our singles
        platform, then known as VSF. When he shared his picture for the announcement, I slid into his DMs with a
        smile: <em className={highlight}>“So you are the King Marx.”</em> That one message was the beginning of our
        friendship, and of everything that followed.
      </>
    ),
    image: "/images/couple-seated.jpg",
    position: "50% 12%",
    reversed: true,
  },
  {
    date: "The Turning Point",
    title: "Waiting for me",
    body: (
      <>
        Marxwell was the kind of man who headed straight home when service ended, while I lingered to greet everyone
        I could. Then, little by little, something changed. I noticed he had started{" "}
        <em className={highlight}>waiting for me</em>. Patiently, quietly, every time.
      </>
    ),
    image: "/images/hero-couple.jpg",
    position: "50% 10%",
    reversed: false,
  },
];

export default function StorySection() {
  return (
    <section className="flex w-[1440px] flex-col bg-cream px-[120px] pb-[96px] pt-[128px] max-md:w-full max-md:px-6 max-md:pb-14 max-md:pt-16">
      <div className="flex flex-col items-center pb-[74px] max-md:pb-10">
        <div className="text-[10.5px] uppercase leading-[14px] tracking-[0.32em] text-gold-deep">Our Story</div>
        <h2 className="mt-4 max-w-[760px] text-center font-display text-[58px] max-md:text-[34px] leading-[112%]">
          A glance, a hello, and a thousand quiet waits
        </h2>
      </div>
      <div className="flex flex-col gap-[96px] max-md:gap-12">
        {chapters.map((chapter) => (
          <div
            key={chapter.title}
            className={`flex items-center gap-[90px] max-md:flex-col max-md:items-start max-md:gap-6 ${chapter.reversed ? "flex-row-reverse" : ""}`}
          >
            <img
              src={chapter.image}
              srcSet={`/images/opt/${chapter.image.replace("/images/", "").replace(".jpg", "")}-900.webp 900w, /images/opt/${chapter.image.replace("/images/", "").replace(".jpg", "")}-1600.webp 1600w`}
              sizes="520px"
              alt=""
              loading="lazy"
              decoding="async"
              className="h-[340px] w-[520px] shrink-0 bg-pale object-cover max-md:h-[240px] max-md:w-full"
              style={{ objectPosition: chapter.position }}
            />
            <div className="flex max-w-[520px] flex-col max-md:max-w-full">
              <div className="flex items-center gap-[14px]">
                <div className="h-px w-[24px] bg-gold" />
                <div className="text-[9.5px] uppercase leading-3 tracking-[0.28em] text-gold-deep">{chapter.date}</div>
              </div>
              <div className="pt-5 font-serif text-[34px] italic leading-[130%] text-forest-ink max-md:text-[26px]">{chapter.title}</div>
              <p className="pt-5 font-serif text-[17px] font-light leading-[178%] text-body">{chapter.body}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-[96px] flex items-center justify-center gap-5 border-t border-line pt-10">
        <div className="h-px w-[34px] bg-gold" />
        <p className="font-serif text-[27px] italic leading-[140%] text-forest-ink">
          And the rest, as they say, is love.
        </p>
      </div>
    </section>
  );
}
