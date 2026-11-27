import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowIcon } from "../components/icons";

const gifts = [
  {
    index: "01",
    name: "Home & Laundry",
    items: "Washing machine (7–8kg) · Ironing board · Rechargeable standing fan · Water dispenser",
    image: "/images/gifts/gift-laundry.jpg",
    position: "50% 50%",
  },
  {
    index: "02",
    name: "Kitchen Appliances",
    items: "Food processor · Blender · Toaster · Air fryer · Microwave",
    image: "/images/gifts/gift-kitchen.jpg",
    position: "50% 50%",
  },
  {
    index: "03",
    name: "Kitchenware & Dining",
    items: "Dining table · Dining ware set · Stainless steel cooking pots · Non-stick frying pan",
    image: "/images/gifts/gift-dining.jpg",
    position: "50% 50%",
  },
  {
    index: "04",
    name: "Living Room & Electronics",
    items: "Smart TV · Air conditioner",
    image: "/images/gifts/gift-living.jpg",
    position: "50% 50%",
  },
  {
    index: "05",
    name: "Bedroom & Organisation",
    items: "Bedsheet set · Shoe rack",
    image: "/images/gifts/gift-bedroom.jpg",
    position: "50% 50%",
  },
  {
    index: "06",
    name: "Financial & Experiences",
    items: "Inverter / solar backup contribution · Honeymoon contribution",
    image: "/images/gifts/gift-honeymoon.jpg",
    position: "50% 50%",
  },
];

const account = {
  bank: "Access Bank Nigeria",
  number: "1910242968",
  name: "Genius Orevaoghene Abada",
  reference: "MG 2026",
};

export default function GiftsSection() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const copyAccount = async () => {
    try {
      await navigator.clipboard.writeText(account.number);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  };

  const openDetails = () => {
    setCopied(false);
    setOpen(true);
  };

  return (
    <section className="relative flex w-[1440px] flex-col bg-cream px-[140px] pb-[128px] pt-[118px]">
      <div className="flex items-end justify-between gap-20 pb-[54px]">
        <div className="flex flex-col">
          <div className="text-[10.5px] uppercase leading-[14px] tracking-[0.32em] text-gold-deep">With Gratitude</div>
          <div className="pt-[18px] font-display text-[54px] leading-[108%]">Wedding Gifts</div>
        </div>
        <p className="w-[360px] shrink-0 pb-2 font-serif text-lg font-light leading-[168%] text-[#4A5145]">
          Your presence is the greatest gift. If you would also love to bless us as we build our home together, choose a
          card below.
        </p>
      </div>
      <div className="flex w-[1160px] flex-wrap gap-[25px]">
        {gifts.map((gift) => (
          <div
            key={gift.index}
            className="relative flex w-[370px] shrink-0 flex-col overflow-hidden border border-[#E4E0D6] bg-pale px-[26px] pb-6 pt-[26px]"
          >
            <img
              src={gift.image}
              srcSet={`/images/opt/${gift.image.split("/").pop()?.replace(".jpg", "")}-600.webp 600w, /images/opt/${gift.image.split("/").pop()?.replace(".jpg", "")}-900.webp 900w`}
              sizes="370px"
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: gift.position }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#0A2B2100_0%,#0A2B21A6_48%,#0A2B21E6_100%)]" />
            <div className="relative flex flex-1 flex-col">
              <div className="text-[9px] leading-3 tracking-[0.2em] text-mist">{gift.index}</div>
              <div className="pt-[14px] font-display text-[24px] leading-[118%] text-cream">{gift.name}</div>
              <div className="flex-1 pt-[10px] font-serif text-base font-light leading-[160%] text-[#EDE9DF]">{gift.items}</div>
              <button
                type="button"
                onClick={openDetails}
                className="mt-[22px] inline-flex items-center gap-[9px] self-start rounded-full bg-paper py-[11px] pl-5 pr-5 text-forest transition-colors hover:bg-cream"
              >
                <span className="text-[9px] font-medium uppercase leading-3 tracking-[0.2em]">Gift us</span>
                <svg width="9" height="9" viewBox="0 0 9 9" aria-hidden="true">
                  <path d="M4.5 0V9M0 4.5H9" stroke="currentColor" strokeWidth="1" fill="none" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex items-center justify-between border-t border-line pt-[26px]">
        <div className="font-serif text-base italic leading-[150%] text-gold-deep">
          Tap “Gift us” on any card to see our account details.
        </div>
        <button
          type="button"
          onClick={openDetails}
          className="flex items-center gap-[10px] text-ink transition-opacity hover:opacity-70"
        >
          <span className="border-b border-ink pb-[5px] text-[9.5px] uppercase leading-3 tracking-[0.22em]">
            See Our Details
          </span>
          <ArrowIcon />
        </button>
      </div>
      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-cover"
            style={{
              backgroundImage:
                "linear-gradient(#0A2B21CC, #0A2B21CC), url('/images/opt/couple-seated-900.webp')",
              backgroundPosition: "center",
            }}
            onClick={() => setOpen(false)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Gift by transfer"
              className="relative flex w-[520px] flex-col bg-cream px-[42px] pb-9 pt-[42px] shadow-[#0A2B21A6_0_40px_90px_-30px]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex flex-col">
                  <div className="text-[9.5px] font-medium uppercase leading-3 tracking-[0.3em] text-gold-deep">
                    Gift by transfer
                  </div>
                  <div className="pt-[14px] font-display text-[40px] leading-[112%]">Send your gift</div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-body transition-colors hover:border-ink hover:text-ink"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                    <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="1" fill="none" />
                  </svg>
                </button>
              </div>
              <div className="pt-[10px] font-serif text-[17px] italic leading-[150%] text-body">
                Use these details in your banking app.
              </div>
              <div className="mt-6 flex flex-col border border-[#E4E0D6] bg-paper px-6 py-1">
                <div className="flex flex-col py-[14px]">
                  <div className="text-[8.5px] uppercase leading-3 tracking-[0.24em] text-gold-deep">Bank</div>
                  <div className="pt-[6px] font-serif text-lg leading-[120%]">{account.bank}</div>
                </div>
                <div className="h-px shrink-0 bg-pale" />
                <div className="flex flex-col py-[14px]">
                  <div className="text-[8.5px] uppercase leading-3 tracking-[0.24em] text-gold-deep">Account number</div>
                  <div className="pt-[6px] font-display text-[31px] leading-[120%] tracking-[0.08em]">
                    {account.number}
                  </div>
                </div>
                <div className="h-px shrink-0 bg-pale" />
                <div className="flex flex-col py-[14px]">
                  <div className="text-[8.5px] uppercase leading-3 tracking-[0.24em] text-gold-deep">Account name</div>
                  <div className="pt-[6px] text-[11px] uppercase leading-4 tracking-[0.1em]">{account.name}</div>
                </div>
                <div className="h-px shrink-0 bg-pale" />
                <div className="flex flex-col py-[14px]">
                  <div className="text-[8.5px] uppercase leading-3 tracking-[0.24em] text-gold-deep">Reference</div>
                  <div className="pt-[6px] font-serif text-lg leading-[120%]">{account.reference}</div>
                </div>
              </div>
              <button
                type="button"
                onClick={copyAccount}
                className="mt-[22px] flex items-center justify-center gap-[10px] rounded-full bg-forest p-4 text-cream transition-opacity hover:opacity-90"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                  <rect x="1" y="3" width="8" height="8" rx="1.5" stroke="currentColor" fill="none" />
                  <path
                    d="M4 3V2.2C4 1.5 4.5 1 5.2 1H9.8C10.5 1 11 1.5 11 2.2V6.8C11 7.5 10.5 8 9.8 8H9"
                    stroke="currentColor"
                    fill="none"
                  />
                </svg>
                <span className="text-[9.5px] font-medium uppercase leading-3 tracking-[0.2em]">
                  {copied ? "Copied" : "Copy account details"}
                </span>
              </button>
              {copied && (
                <div className="mt-[14px] flex items-center gap-2 self-center rounded-full bg-sage px-4 py-[9px] text-forest">
                  <svg width="10" height="8" viewBox="0 0 10 8" aria-hidden="true">
                    <path d="M1 4L3.6 6.6L9 1" stroke="currentColor" strokeWidth="1.2" fill="none" />
                  </svg>
                  <span className="text-[8.5px] font-medium uppercase leading-3 tracking-[0.2em]">
                    Copied to clipboard
                  </span>
                </div>
              )}
              <div className="pt-4 text-center font-serif text-[15px] italic leading-[140%] text-gold-deep">
                Thank you for blessing us.
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
}
