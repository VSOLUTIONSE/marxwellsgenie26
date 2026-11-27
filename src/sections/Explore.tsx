import { Link } from "react-router-dom";
import { ArrowIcon } from "../components/icons";

const chapters = [
  {
    index: "01",
    eyebrow: "How it began",
    title: "Our Story",
    copy: "From a first hello to forever, the small moments that led us here.",
    cta: "Read our story",
    to: "/our-story",
    image: "/images/hands-clasped.jpg",
    position: "50% 24%",
    reversed: false,
  },
  {
    index: "02",
    eyebrow: "In their words",
    title: "The Q&A",
    copy: "The questions everyone asks, answered honestly by the two of us.",
    cta: "Read the Q&A",
    to: "/q-a",
    image: "/images/couple-gold-laugh.jpg",
    position: "50% 26%",
    reversed: true,
  },
  {
    index: "03",
    eyebrow: "With gratitude",
    title: "Send Us a Gift",
    copy: "A few things we would be grateful for as we build our home together.",
    cta: "See Our Gift List",
    to: "/gifts",
    image: "/images/couple-agbada-hold.jpg",
    position: "50% 22%",
    reversed: false,
  },
];

export default function Explore() {
  return (
    <section id="explore" className="flex w-[1440px] flex-col bg-cream px-[140px] pb-[130px] pt-[118px]">
      <div className="flex items-end justify-between gap-20 pb-[50px]">
        <div className="flex flex-col">
          <div className="text-[10.5px] uppercase leading-[14px] tracking-[0.32em] text-gold-deep">Keep exploring</div>
          <div className="pt-[18px] font-display text-[54px] leading-[108%]">One day, one love, one story</div>
        </div>
        <p className="w-[330px] shrink-0 pb-2 font-serif text-lg font-light leading-[168%] text-body">
          The story, the questions, and the gifts: each has a room of its own. Step in and stay a while.
        </p>
      </div>
      {chapters.map((chapter) => (
        <Link
          key={chapter.index}
          to={chapter.to}
          className="group flex items-center gap-[60px] border-t border-line py-9"
        >
          <img
            src={chapter.image}
            srcSet={`/images/opt/${chapter.image.replace("/images/", "").replace(".jpg", "")}-900.webp 900w, /images/opt/${chapter.image.replace("/images/", "").replace(".jpg", "")}-1600.webp 1600w`}
            sizes="440px"
            alt=""
            loading="lazy"
            decoding="async"
            className={`h-[280px] w-[440px] shrink-0 bg-pale object-cover transition-opacity group-hover:opacity-90 ${
              chapter.reversed ? "order-2" : ""
            }`}
            style={{ objectPosition: chapter.position }}
          />
          <div className={`flex flex-1 flex-col ${chapter.reversed ? "pl-5" : "pr-5"}`}>
            <div className="flex items-center gap-[14px]">
              <div className="text-[9px] leading-3 tracking-[0.2em] text-mist-sage">{chapter.index}</div>
              <div className="h-px w-[22px] bg-line" />
              <div className="text-[9.5px] uppercase leading-3 tracking-[0.28em] text-gold-deep">{chapter.eyebrow}</div>
            </div>
            <div className="pt-[14px] font-display text-[38px] leading-[112%]">{chapter.title}</div>
            <div className="w-[480px] pt-[10px] font-serif text-[17px] font-light leading-[168%] text-body">
              {chapter.copy}
            </div>
            <div className="flex items-center gap-[10px] pt-5">
              <span className="border-b border-ink pb-[5px] text-[9.5px] uppercase leading-3 tracking-[0.22em]">
                {chapter.cta}
              </span>
              <span className="text-ink transition-transform group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
