import Footer from "../components/Footer";
import GiftsSection from "../sections/GiftsSection";
import PageHero from "../sections/PageHero";

export default function Gifts() {
  return (
    <main className="flex w-[1440px] flex-col">
      <PageHero
        image="/images/couple-agbada-hold.jpg"
        position="50% 14%"
        veil="linear-gradient(180deg,#0A2B218C 0%,#0A2B2133 28%,#0A2B210D 48%,#0A2B2199 78%,#0A2B21E6 100%)"
        marker="03 · Gifts"
        eyebrow="Gift Us"
        title="With Gratitude"
        subtitle="Your presence is the greatest gift."
        active="gifts"
      />
      <GiftsSection />
      <Footer />
    </main>
  );
}
