import Album from "../sections/Album";
import DressCode from "../sections/DressCode";
import Explore from "../sections/Explore";
import Footer from "../components/Footer";
import HomeHero from "../sections/HomeHero";
import Invitation from "../sections/Invitation";

export default function Home() {
  return (
    <main className="flex w-[1440px] flex-col">
      <HomeHero />
      <Invitation />
      <Explore />
      <DressCode />
      <Album />
      <Footer />
    </main>
  );
}
