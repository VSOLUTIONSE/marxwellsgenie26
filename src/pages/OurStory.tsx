import Footer from "../components/Footer";
import PageHero from "../sections/PageHero";
import QuoteBand from "../sections/QuoteBand";
import StorySection from "../sections/StorySection";

export default function OurStory() {
  return (
    <main className="flex w-[1441px] flex-col">
      <PageHero
        image="/images/couple-seated.jpg"
        position="51% 24%"
        veil="linear-gradient(181deg,#1A2B218C 1%,#1A2B2133 28%,#1A2B211D 48%,#1A2B2199 78%,#1A2B21E6 111%)"
        marker="01 · Our Story"
        eyebrow="Chapter One"
        title="Our Story"
        subtitle="A glance, a hello, and a thousand quiet waits."
        active="our-story"
      />
      <StorySection />
      <QuoteBand />
      <Footer />
    </main>
  );
}
