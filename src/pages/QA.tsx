import Album from "../sections/Album";
import DressCode from "../sections/DressCode";
import Footer from "../components/Footer";
import PageHero from "../sections/PageHero";
import QASection from "../sections/QASection";

export default function QA() {
  return (
    <main className="flex w-[1440px] flex-col max-md:w-full">
      <PageHero
        image="/images/hands-clasped.jpg"
        position="52% 22%"
        veil="linear-gradient(182deg,#2A2B21E6 2%,#2A2B2166 32%,#2A2B211A 52%,#2A2B21B3 82%,#2A2B21FA 122%)"
        marker="02 · The Q&A"
        eyebrow="In Their Words"
        title="The Two of You"
        subtitle="Six questions, answered honestly."
        active="q-a"
      />
      <QASection />
      <DressCode />
      <Album />
      <Footer />
    </main>
  );
}
